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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              className="mt-3 max-w-lg text-4xl font-black leading-tight text-[rgb(var(--color-ink))] sm:text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A practical supply partner with a premium standard of service.
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-2xl font-semibold leading-10 text-[rgb(var(--color-ink))]">
              {company.description}
            </p>

            <p className="text-body">
              The company profile positions AGI as an innovative and collaborative enterprise focused on dependable sourcing, fast communication, and seamless delivery. The website translates that into a clear digital presence built for credibility and conversion.
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
