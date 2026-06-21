import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { services } from '../utils/content';

export function ServicesSection() {
  const [expanded, setExpanded] = useState(null);

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
          {services.map((service, index) => {
            const isExpanded = expanded === index;
            return (
              <motion.article
                key={index}
                className="group flex flex-col rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-6 shadow-sm transition-colors hover:border-[rgb(var(--color-accent)/0.45)] cursor-pointer"
                style={{ minHeight: isExpanded ? 'auto' : '330px' }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={!isExpanded ? { y: -6 } : {}}
                onClick={() => setExpanded(isExpanded ? null : index)}
                role="button"
                aria-expanded={isExpanded}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setExpanded(isExpanded ? null : index)}
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]">
                    <service.icon size={23} strokeWidth={1.8} />
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight
                      className="text-[rgb(var(--color-subtle))] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[rgb(var(--color-accent))]"
                      size={20}
                    />
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[rgb(var(--color-subtle))]"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>
                </div>

                <h3 className="text-2xl font-black leading-tight text-[rgb(var(--color-ink))]">
                  {service.title}
                </h3>
                <p className="mt-4 text-body">{service.summary}</p>

                {/* Items: always visible on desktop, expandable on mobile via click */}
                <AnimatePresence initial={false}>
                  {(isExpanded || true) && (
                    <motion.ul
                      className="mt-auto space-y-3 pt-8"
                      initial={false}
                      animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0.55, height: 'auto' }}
                    >
                      {service.items.map((item, i) => (
                        <motion.li
                          key={item}
                          className="flex gap-3 text-sm font-semibold text-[rgb(var(--color-muted-ink))]"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: isExpanded ? i * 0.06 : 0 }}
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[rgb(var(--color-accent))]" />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                {/* Expanded accent bar */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      className="mt-6 h-0.5 rounded-full bg-[rgb(var(--color-accent)/0.35)]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      style={{ originX: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-[rgb(var(--color-subtle))]">
          Click any card to explore items
        </p>
      </Container>
    </Section>
  );
}
