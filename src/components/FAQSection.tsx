import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How much does balcony bird netting cost in Lucknow & Ranchi?",
    a: "Our standard balcony netting starts at ₹999 and is priced per square foot depending on balcony size, mesh type (nylon / HDPE) and height. We provide a free on-site measurement and a written, no-obligation quote before any work begins.",
  },
  {
    q: "Is the netting safe for birds and pets?",
    a: "Yes. We use humane, UV-stabilised HDPE mesh that simply prevents birds from landing or nesting — it does not trap or harm them. It is also completely safe for children and pets on the balcony.",
  },
  {
    q: "Will the net spoil the look of my balcony?",
    a: "No. We use a nearly transparent mesh anchored with slim SS-304/SS-316 hooks. From inside your home the view stays clear, and from the street the net is barely visible.",
  },
  {
    q: "How long does installation take?",
    a: "A standard balcony is installed in 1–2 hours by our trained two-person crew. Larger buildings and multiple balconies are usually completed the same day.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every installation includes a written 5-year warranty on the mesh and hardware, plus free service visits if any tension adjustment is needed.",
  },
  {
    q: "Which areas do you cover?",
    a: "We serve all of Lucknow (Gomti Nagar, Hazratganj, Indira Nagar, Aliganj, Vibhuti Khand and more) and Ranchi (Kanke Road, Lalpur, Doranda, Harmu, Ashok Nagar and surrounding areas).",
  },
  {
    q: "Can I book a site visit without committing?",
    a: "Absolutely. Site visits and measurements are 100% free with no obligation. Call +91 95769 51751 or send us a WhatsApp message to schedule.",
  },
];

const FAQSection = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-14 md:py-20 bg-background relative overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
      />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="text-gold font-bold text-xs uppercase tracking-[0.24em]">
              Frequently asked
            </span>
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
          </div>
          <h2
            id="faq-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-5 tracking-tight leading-[1.05]"
          >
            Everything you need to know
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Answers to the questions homeowners in Lucknow & Ranchi ask us most.
            Still unsure? Message us on WhatsApp for a personal reply.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-2xl bg-card px-5 md:px-6 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-secondary/40 transition-all"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 group">
                  <span className="flex items-start gap-3 text-base md:text-lg font-semibold text-foreground pr-2">
                    <HelpCircle
                      className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-data-[state=open]:text-gold transition-colors"
                      aria-hidden="true"
                    />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pl-8 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
