import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfolioSection,
  ServicesSection,
  ValuesSection,
  WhyChooseUsSection,
} from '../sections';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
