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
import { services, company } from '../utils/content';

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
    <main>
      <HeroSection />
      <div className="border-y border-[rgb(var(--color-line))] bg-[rgb(var(--color-canvas))]">
        <Marquee items={marqueeItems} speed={60} />
      </div>
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
