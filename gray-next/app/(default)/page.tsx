export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};
import Features01 from "@/components/features-01";
import Features02 from "@/components/features-02";
import Features03 from "@/components/features-03";
import PricingTabs from "@/components/pricing-tabs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import FloatingNav from "@/components/floating-nav/FloatingNav";
import HeroAbout from "@/components/heroabout";

export default function Home() {
  return (
    <>
      <HeroAbout />
      <Features02 />
      <Features01 />
      <Features03 />
      <PricingTabs />
      <Testimonials />
      <FloatingNav />
      <Cta />
    </>
  );
}
