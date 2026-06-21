import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { company, contactCards } from '../utils/content';

export function Footer() {
  const links = ['About', 'Services', 'Values', 'Contact'];

  return (
    <footer className="bg-[#0a0f1e] pb-32 pt-16 text-slate-100 sm:pb-40 sm:pt-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-white/10 text-sm font-black text-white">
              AGI
            </div>
            <h3 className="mb-6 max-w-sm text-3xl font-bold tracking-tight leading-tight sm:text-4xl">
              Setting the benchmark for excellence.
            </h3>
            <p className="max-w-md text-[15px] leading-relaxed text-white/50">
              {company.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-5 text-sm font-bold uppercase">Company</h4>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-5 text-sm font-bold uppercase">Contact</h4>
            <div className="grid gap-4">
              {contactCards.slice(0, 3).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <Icon size={18} className="mt-1 shrink-0 text-[rgb(var(--color-accent-soft))]" />
                    <div>
                      <p className="text-xs font-bold uppercase text-white/35">{item.label}</p>
                      <p className="text-sm text-white/70">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/5 pt-10 text-[13px] font-medium text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. Zambian Registered Enterprise.</p>
          <div className="flex items-center gap-8">
            <span className="italic tracking-wide text-white/20">{company.strapline}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
