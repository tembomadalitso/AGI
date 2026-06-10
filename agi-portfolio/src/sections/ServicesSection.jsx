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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-caption text-[rgb(var(--color-accent))]">
              Products & Services
            </span>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[rgb(var(--color-ink))] sm:text-5xl">
              A complete supply desk for operational teams.
            </h2>
          </div>
          <p className="text-body max-w-2xl lg:justify-self-end">
            The company profile spans ICT, office, digital, hygiene, hardware, agriculture, automotive, and branding needs. Each line is presented here as a clear service path for fast qualification.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="group flex min-h-[330px] flex-col rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-6 shadow-sm transition-colors hover:border-[rgb(var(--color-accent)/0.45)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]">
                  <service.icon size={23} strokeWidth={1.8} />
                </div>
                <ArrowUpRight className="text-[rgb(var(--color-subtle))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-accent))]" size={20} />
              </div>

              <h3 className="text-2xl font-black leading-tight text-[rgb(var(--color-ink))]">
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
