import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  ValuesSection,
  WhyChooseUsSection,
} from '../sections';
import { Marquee } from '../components';
import { services } from '../utils/content';

export function HomePage() {
  const marqueeItems = [
    ...services.map(s => s.title),
    "Nationwide Delivery",
    "Strategic Sourcing",
    "Corporate Branding",
    "Institutional Growth",
    "Zambian Enterprise"
  ];

  return (
    <main className="pb-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ContactSection />

      {/* Sticky Bottom Marquee */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[rgb(var(--color-line)/0.3)] bg-[rgb(var(--color-canvas)/0.7)] backdrop-blur-2xl">
        <Marquee items={marqueeItems} speed={60} />
      </div>
    </main>
  );
}
