import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactInfo = [
  { icon: Phone, label: "Call us", value: "+91 95769 51751", href: "tel:+919576951751" },
  { icon: Mail, label: "Email us", value: "satyamkumarsim@gmail.com", href: "mailto:satyamkumarsim@gmail.com" },
  { icon: MapPin, label: "Serving", value: "Lucknow & Ranchi" },
];

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number"),
  city: z.enum(["Lucknow", "Ranchi"], {
    errorMap: () => ({ message: "Please select your city" }),
  }),
  balcony_size: z.string().trim().min(1, "Please describe your balcony size").max(100),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = {
  name: string;
  phone: string;
  city: "" | "Lucknow" | "Ranchi";
  balcony_size: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  city: "",
  balcony_size: "",
  message: "",
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = enquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast({
        title: "Please fix the highlighted fields",
        description: "A few details are missing or invalid.",
        variant: "destructive",
      });
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("enquiries").insert({
      name: result.data.name,
      phone: result.data.phone,
      city: result.data.city,
      balcony_size: result.data.balcony_size,
      message: result.data.message ? result.data.message : null,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Could not submit your enquiry",
        description: "Please try again in a moment or call us directly.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Enquiry received!",
      description: "Our team will call you back within 2 hours.",
    });
    setFormData(initialState);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-14 md:py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="text-primary-foreground">
            <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
              Get in Touch
            </span>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Get Your Free Quote Today
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-10 leading-relaxed max-w-lg">
              Share a few details and our team will call you back for a free on-site measurement and quote.
            </p>

            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-secondary/30">
                      <Icon className="w-5 h-5 text-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-primary-foreground/60 text-xs uppercase tracking-wider">{label}</div>
                      <div className="text-primary-foreground text-base md:text-lg font-medium">{value}</div>
                    </div>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                        aria-label={`${label}: ${value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-labelledby="contact-heading"
            className="bg-card rounded-3xl p-6 sm:p-8 md:p-10 card-shadow space-y-5"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="contact-name">Full name <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Input
                id="contact-name"
                autoComplete="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                maxLength={100}
                className="h-12"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">Phone number <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Input
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                aria-required="true"
                aria-invalid={!!errors.phone}
                maxLength={20}
                className="h-12"
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-city">City <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Select
                value={formData.city}
                onValueChange={(value) =>
                  setFormData({ ...formData, city: value as FormState["city"] })
                }
              >
                <SelectTrigger
                  id="contact-city"
                  aria-required="true"
                  aria-invalid={!!errors.city}
                  className="h-12"
                >
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Lucknow">Lucknow</SelectItem>
                  <SelectItem value="Ranchi">Ranchi</SelectItem>
                </SelectContent>
              </Select>
              {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-size">Balcony size <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Input
                id="contact-size"
                placeholder='e.g. 8 ft x 4 ft, or "small / medium / large"'
                value={formData.balcony_size}
                onChange={(e) => setFormData({ ...formData, balcony_size: e.target.value })}
                required
                aria-required="true"
                aria-invalid={!!errors.balcony_size}
                maxLength={100}
                className="h-12"
              />
              {errors.balcony_size && (
                <p className="text-sm text-destructive">{errors.balcony_size}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Additional details <span className="text-muted-foreground text-xs">(optional)</span></Label>
              <Textarea
                id="contact-message"
                placeholder="Floor, number of sides to cover, preferred visit time…"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                maxLength={1000}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full text-base md:text-lg min-h-14 bg-secondary text-secondary-foreground hover:bg-secondary/90 accent-glow font-semibold group"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Request Free Quote
                  <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted about your quote. We never share your details.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
