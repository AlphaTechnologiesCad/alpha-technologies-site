import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { HowItWorks } from "@/components/how-it-works";
import { SystemsShowcase } from "@/components/systems-showcase";
import { SustainabilitySection } from "@/components/sustainability-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <HeroSection />
      <StatsStrip />
      <HowItWorks />
      <SystemsShowcase />
      <SustainabilitySection />
      <TestimonialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
