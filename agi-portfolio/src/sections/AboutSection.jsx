import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { company } from '../utils/content';

export function AboutSection() {
  return (
    <Section id="about" background="default">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <motion.span
              className="text-caption text-[rgb(var(--color-accent))]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              About Us
            </motion.span>
            <motion.h2
              className="mt-3 max-w-lg text-4xl font-bold tracking-tight leading-tight text-[rgb(var(--color-ink))] sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Excellence in every delivery, precision in every project.
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <p className="text-2xl font-semibold leading-10 text-[rgb(var(--color-ink))]">
              {company.description}
            </p>

            <p className="text-body">
              AGI Enterprise Limited is built on a foundation of reliability and collaborative innovation. We prioritize dependable sourcing, rapid communication, and seamless delivery to ensure our institutional partners can focus on their core objectives without supply chain interruptions.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <motion.div
                className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-6 shadow-sm"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-caption text-[rgb(var(--color-accent))]">Mission</p>
                <h3 className="mt-3 text-title">Operational efficiency, delivered.</h3>
                <p className="mt-3 text-body">{company.mission}</p>
              </motion.div>

              <motion.div
                className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-6 shadow-sm"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-caption text-[rgb(var(--color-accent))]">Vision</p>
                <h3 className="mt-3 text-title">A trusted Zambian supply leader.</h3>
                <p className="mt-3 text-body">{company.vision}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
