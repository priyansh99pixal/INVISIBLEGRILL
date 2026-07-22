import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";



import BrochureSection from "@/components/BrochureSection";
import ServiceMap from "@/components/ServiceMap";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";

const Index = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <GallerySection />

        
        <FAQSection />
        <BrochureSection />
        <ServiceMap />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <OfferPopup />
    </div>
  );
};

export default Index;
