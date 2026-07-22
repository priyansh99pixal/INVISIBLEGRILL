import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { LogOut, Phone, Mail, MapPin, Calendar, CheckCircle2, Loader2 } from "lucide-react";

type Enquiry = {
  id: string;
  name: string;
  phone: string;
  city: string;
  balcony_size: string;
  message: string | null;
  status: string;
  notes: string | null;
  contacted_at: string | null;
  created_at: string;
};

const AdminInbox = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  useEffect(() => {
    document.title = "Admin Inbox — Home Safety Invisible Grill";

    const init = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        navigate("/admin/auth", { replace: true });
        return;
      }
      const { data: isAdmin } = await supabase.rpc("has_role", {
        _user_id: userData.user.id,
        _role: "admin",
      });
      if (!isAdmin) {
        setAuthorized(false);
        setLoading(false);
        return;
      }
      setAuthorized(true);
      await load();
      setLoading(false);
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/admin/auth", { replace: true });
    });

    init();
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const load = async () => {
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast.error(error.message);
      return;
    }
    setEnquiries(data ?? []);
    setDrafts(Object.fromEntries((data ?? []).map((e) => [e.id, e.notes ?? ""])));
  };

  const filtered = useMemo(() => {
    return enquiries.filter((e) => {
      if (cityFilter !== "all" && e.city !== cityFilter) return false;
      if (statusFilter !== "all" && e.status !== statusFilter) return false;
      return true;
    });
  }, [enquiries, cityFilter, statusFilter]);

  const counts = useMemo(
    () => ({
      all: enquiries.length,
      new: enquiries.filter((e) => e.status === "new").length,
      contacted: enquiries.filter((e) => e.status === "contacted").length,
    }),
    [enquiries]
  );

  const markContacted = async (id: string) => {
    setSaving((s) => ({ ...s, [id]: true }));
    const notes = drafts[id] ?? null;
    const { error } = await supabase
      .from("enquiries")
      .update({ status: "contacted", notes, contacted_at: new Date().toISOString() })
      .eq("id", id);
    setSaving((s) => ({ ...s, [id]: false }));
    if (error) return toast.error(error.message);
    toast.success("Marked as contacted");
    load();
  };

  const saveNotes = async (id: string) => {
    setSaving((s) => ({ ...s, [id]: true }));
    const { error } = await supabase
      .from("enquiries")
      .update({ notes: drafts[id] ?? null })
      .eq("id", id);
    setSaving((s) => ({ ...s, [id]: false }));
    if (error) return toast.error(error.message);
    toast.success("Notes saved");
    load();
  };

  const reopen = async (id: string) => {
    const { error } = await supabase
      .from("enquiries")
      .update({ status: "new", contacted_at: null })
      .eq("id", id);
    if (error) return toast.error(error.message);
    load();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/auth", { replace: true });
  };

  if (loading) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <Loader2 className="animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!authorized) {
    return (
      <div className="min-h-dvh flex items-center justify-center px-4">
        <Card className="max-w-md p-8 text-center space-y-4">
          <h1 className="text-xl font-semibold">Not authorized</h1>
          <p className="text-sm text-muted-foreground">
            Your account is signed in but doesn't have admin access yet. Ask the site owner to grant your account the admin role.
          </p>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-muted/30">
      <header className="border-b bg-background">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold">Admin Inbox</h1>
            <p className="text-xs text-muted-foreground">Home Safety Invisible Grill</p>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-2" /> Sign out
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <Tabs value={statusFilter} onValueChange={setStatusFilter}>
            <TabsList>
              <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
              <TabsTrigger value="new">New ({counts.new})</TabsTrigger>
              <TabsTrigger value="contacted">Contacted ({counts.contacted})</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="sm:ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">City</span>
            <Select value={cityFilter} onValueChange={setCityFilter}>
              <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All cities</SelectItem>
                <SelectItem value="Lucknow">Lucknow</SelectItem>
                <SelectItem value="Ranchi">Ranchi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <Card className="p-10 text-center text-muted-foreground">No enquiries match these filters.</Card>
        ) : (
          <div className="grid gap-4">
            {filtered.map((e) => (
              <Card key={e.id} className="p-5 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg font-semibold">{e.name}</h2>
                      <Badge variant={e.status === "contacted" ? "secondary" : "default"}>
                        {e.status === "contacted" ? "Contacted" : "New"}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <a href={`tel:${e.phone}`} className="flex items-center gap-1 hover:text-foreground">
                        <Phone className="h-3.5 w-3.5" /> {e.phone}
                      </a>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {e.city}</span>
                      <span>Balcony: {e.balcony_size}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(e.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/91${e.phone.replace(/\D/g, "").slice(-10)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button variant="outline" size="sm"><Mail className="h-4 w-4 mr-1" /> WhatsApp</Button>
                    </a>
                  </div>
                </div>

                {e.message && (
                  <div className="text-sm bg-muted/50 rounded-md p-3">
                    <span className="font-medium">Message: </span>{e.message}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium">Notes</label>
                  <Textarea
                    value={drafts[e.id] ?? ""}
                    onChange={(ev) => setDrafts((d) => ({ ...d, [e.id]: ev.target.value }))}
                    placeholder="Follow-up notes, quote shared, next steps…"
                    rows={3}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {e.status === "new" ? (
                    <Button size="sm" onClick={() => markContacted(e.id)} disabled={saving[e.id]}>
                      <CheckCircle2 className="h-4 w-4 mr-1" /> Mark as contacted
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => reopen(e.id)}>
                      Reopen as new
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" onClick={() => saveNotes(e.id)} disabled={saving[e.id]}>
                    Save notes
                  </Button>
                  {e.contacted_at && (
                    <span className="text-xs text-muted-foreground ml-auto">
                      Contacted {new Date(e.contacted_at).toLocaleString()}
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminInbox;
