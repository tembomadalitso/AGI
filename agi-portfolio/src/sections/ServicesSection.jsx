import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { services } from '../utils/content';

export function ServicesSection() {
  return (
    <Section id="services" background="muted">
      <Container>
        <motion.div
          className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <div>
            <span className="text-caption text-[rgb(var(--color-accent))]">
              Products & Services
            </span>
            <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight leading-tight text-[rgb(var(--color-ink))] sm:text-5xl">
              A complete supply desk for operational teams.
            </h2>
          </div>
          <p className="text-body max-w-2xl lg:justify-self-end">
            Our procurement capabilities span critical operational categories, ensuring institutions can source essential goods through a single, reliable partner.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="group flex min-h-[330px] flex-col rounded-xl border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-8 shadow-[0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:translate-y-[-4px] hover:border-[rgb(var(--color-accent)/0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-lg bg-[rgb(var(--color-accent)/0.08)] text-[rgb(var(--color-accent))]">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="text-[rgb(var(--color-subtle))] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-accent))]" size={20} />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[rgb(var(--color-ink))]">
                {service.title}
              </h3>
              <p className="mt-4 text-body">{service.summary}</p>
              <ul className="mt-auto space-y-3 pt-8">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold text-[rgb(var(--color-muted-ink))]">
                    <span className="mt-2 size-1.5 rounded-full bg-[rgb(var(--color-accent))]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
