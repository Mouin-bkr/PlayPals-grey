export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero";
import Features01 from "@/components/features-01";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import PricingTabs from "@/components/pricing-tabs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import FloatingNav from "@/components/floating-nav/FloatingNav";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <Features02 />
      <Features03 />
      <PricingTabs />
      <Testimonials />
      <Cta />
      <ContactSection />
      <FloatingNav />
    </>
  );
}
