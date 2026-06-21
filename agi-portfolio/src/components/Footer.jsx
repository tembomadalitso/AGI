import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { company, contactCards } from '../utils/content';

export function Footer() {
  const links = ['About', 'Services', 'Values', 'Contact'];

  return (
    <footer className="bg-[#0a0f1e] py-16 text-slate-100 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-white/10 text-sm font-black text-white">
              AGI
            </div>
            <h3 className="mb-4 max-w-sm text-3xl font-black leading-tight sm:text-4xl">
              Procurement built for trust, clarity, and delivery.
            </h3>
            <p className="max-w-md text-sm leading-7 text-white/65">
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

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>{company.strapline}</p>
        </div>
      </Container>
    </footer>
  );
}
