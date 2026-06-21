import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import heroArt from '../assets/hero.png';
import { company, stats } from '../utils/content';

function CountUp({ end, duration = 1600 }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    // Check if value is numeric (strip non-digits for counting)
    const numeric = parseFloat(end.replace(/[^0-9.]/g, ''));
    const suffix = end.replace(/[0-9.]/g, '');
    if (isNaN(numeric)) { setDisplay(end); return; }

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(end);
      return;
    }

    let start = 0;
    const increment = numeric / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numeric) {
        clearInterval(timer);
        setDisplay(end);
      } else {
        const isInt = !end.includes('.');
        setDisplay((isInt ? Math.floor(start) : start.toFixed(1)) + suffix);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{display}</span>;
}

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 50, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.2, 0, 0, 1] },
    },
  };

  return (
    <Section id="home" background="gradient" className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden pb-16 pt-16 sm:pb-20 lg:pt-24">
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
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ delay: 1.2, duration: 0.6, ease: 'easeInOut' }}
              >
                <Sparkles size={15} className="text-[rgb(var(--color-accent))]" />
              </motion.span>
              <span className="text-xs font-bold uppercase text-[rgb(var(--color-muted-ink))]">
                Company Profile 2026
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-4xl font-bold tracking-tight leading-[1.1] text-[rgb(var(--color-ink))] sm:text-6xl lg:text-7xl"
            >
              {company.heroTitle}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-[rgb(var(--color-muted-ink))] sm:text-xl"
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
                Get in touch
                <ArrowRight size={20} />
              </Button>
              <Button
                as="a"
                href="#services"
                variant="secondary"
                size="lg"
              >
                View services
              </Button>
            </motion.div>

            {/* Stats with count-up */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex max-w-2xl flex-wrap gap-4 rounded-2xl border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.5)] p-2 shadow-sm backdrop-blur-md"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex-1 min-w-[120px] rounded-xl bg-[rgb(var(--color-canvas)/0.5)] p-4 border border-[rgb(var(--color-line)/0.5)] transition-all hover:bg-[rgb(var(--color-panel-soft))] group">
                  <p className="text-3xl font-black text-[rgb(var(--color-ink))] group-hover:text-[rgb(var(--color-accent))] transition-colors">
                    <CountUp end={stat.value} />
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--color-subtle))]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative" style={{ y: y1, rotate }}>
            <div className="absolute -inset-10 rounded-[2rem] bg-[rgb(var(--color-accent)/0.15)] blur-[100px]" />
            <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.6)] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl">
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
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.07)', x: 2 }}
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
