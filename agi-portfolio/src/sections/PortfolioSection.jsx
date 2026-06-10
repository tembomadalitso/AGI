import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { portfolio } from '../utils/content';

export function PortfolioSection() {
  return (
    <Section id="portfolio" background="muted">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caption text-[rgb(var(--color-accent))]">Work Focus</span>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[rgb(var(--color-ink))] sm:text-5xl">
              Built around the environments AGI serves.
            </h2>
            <p className="mt-5 text-body">
              The PDF does not list named case studies, so this portfolio area uses accurate service-context placeholders: the kinds of institutions and operational needs AGI is positioned to support.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {portfolio.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="grid gap-5 rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-5 shadow-sm sm:grid-cols-[auto_1fr]"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="grid size-12 place-items-center rounded-lg bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[rgb(var(--color-ink))]">{item.title}</h3>
                    <p className="mt-2 text-body">{item.copy}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
