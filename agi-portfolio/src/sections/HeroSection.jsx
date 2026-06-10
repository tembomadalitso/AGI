import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import heroArt from '../assets/hero.png';
import { company, stats } from '../utils/content';

export function HeroSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="home" background="gradient" className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden pb-16 pt-12 sm:pb-20 lg:pt-16">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <Container className="relative">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <div>
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.74)] px-3 py-2 shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[rgb(var(--color-accent))]" />
              <span className="text-xs font-bold uppercase text-[rgb(var(--color-muted-ink))]">
                Company Profile 2026
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-black leading-[0.98] text-[rgb(var(--color-ink))] sm:text-6xl lg:text-7xl"
            >
              {company.heroTitle}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-lg leading-8 text-[rgb(var(--color-muted-ink))] sm:text-xl"
            >
              {company.heroCopy}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                className="gap-2"
              >
                Request a quotation
                <ArrowRight size={20} />
              </Button>
              <Button as="a" href="#services" variant="secondary" size="lg">
                Explore services
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid max-w-2xl grid-cols-3 divide-x divide-[rgb(var(--color-line))] rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.72)] p-3 shadow-sm backdrop-blur"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="px-3 py-2">
                  <p className="text-2xl font-black text-[rgb(var(--color-ink))]">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase leading-4 text-[rgb(var(--color-subtle))]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[rgb(var(--color-accent)/0.08)] blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.82)] p-4 shadow-2xl shadow-black/10 backdrop-blur-xl">
              <div className="rounded-lg bg-[rgb(var(--color-ink))] p-5 text-[rgb(var(--color-canvas))]">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-white/45">Enterprise supply desk</p>
                    <p className="mt-2 text-2xl font-black">{company.shortName} procurement</p>
                  </div>
                  <img src={heroArt} alt="" className="h-16 w-16 object-contain" />
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { icon: ShieldCheck, label: 'Transparent pricing', value: 'Clear quotations' },
                    { icon: Truck, label: 'Delivery network', value: 'Across Zambia' },
                    { icon: CheckCircle2, label: 'Supplier quality', value: 'Trusted sourcing' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + index * 0.12 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid size-10 place-items-center rounded-lg bg-white/10 text-[rgb(var(--color-accent-soft))]">
                            <Icon size={20} />
                          </span>
                          <span className="text-sm font-bold">{item.label}</span>
                        </div>
                        <span className="text-sm text-white/55">{item.value}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel-soft))] p-4">
                  <p className="text-xs font-bold uppercase text-[rgb(var(--color-subtle))]">Coverage</p>
                  <p className="mt-2 text-lg font-black text-[rgb(var(--color-ink))]">Public & private sector</p>
                </div>
                <div className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel-soft))] p-4">
                  <p className="text-xs font-bold uppercase text-[rgb(var(--color-subtle))]">Focus</p>
                  <p className="mt-2 text-lg font-black text-[rgb(var(--color-ink))]">Quality goods & services</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
