import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { values } from '../utils/content';

export function ValuesSection() {
  return (
    <Section id="values" background="default">
      <Container>
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-caption text-[rgb(var(--color-accent))]">
            Our Foundation
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight leading-tight text-[rgb(var(--color-ink))] sm:text-5xl">
            Principles that define our standard.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body">
            These principles come directly from the company profile and shape how AGI communicates, sources, delivers, and supports each client.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-5 text-left shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="mb-8 grid size-12 place-items-center rounded-lg bg-[rgb(var(--color-accent)/0.08)] text-[rgb(var(--color-accent))]"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </motion.div>
                <p className="mb-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[rgb(var(--color-accent))]">
                  Value 0{index + 1}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-[rgb(var(--color-ink))]">{value.title}</h3>
                <p className="mt-3 text-body-sm">
                  {value.copy}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
