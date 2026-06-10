import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import { reasons } from '../utils/content';

export function WhyChooseUsSection() {
  return (
    <Section id="why-choose-us" background="default">
      <Container>
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-caption text-[rgb(var(--color-accent))]">
            The AGI Difference
          </span>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[rgb(var(--color-ink))] sm:text-5xl">
            Trust signals your procurement team can feel.
          </h2>
          <p className="mt-5 text-body">
            AGI's profile highlights the essentials clients need before they commit: transparent pricing, dependable delivery, supplier quality, and responsive support.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.copy}
              className="h-full min-h-[220px]"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
