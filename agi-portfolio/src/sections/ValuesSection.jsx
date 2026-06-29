import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { values } from '../utils/content';

export function ValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPaused]);

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

        {/* Desktop: 5-col grid */}
        <div className="hidden md:grid gap-4 md:grid-cols-5">
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
                whileHover={{ y: -5, borderColor: 'rgb(var(--color-accent) / 0.4)' }}
              >
                <motion.div
                  className="mb-9 grid size-11 place-items-center rounded-lg bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <Icon size={24} strokeWidth={1.5} />
                </motion.div>
                <p className="mb-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[rgb(var(--color-accent))]">
                  Value 0{index + 1}
                </p>
                <h3 className="text-title">{value.title}</h3>
                <p className="mt-3 text-body-sm">{value.copy}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Automatic Carousel */}
        <div
          className="md:hidden relative -mx-4 px-4 overflow-hidden py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="relative flex items-center justify-center h-[320px]">
            <AnimatePresence mode="popLayout">
              {values.map((value, index) => {
                const Icon = value.icon;
                const isCenter = index === activeIndex;
                const isLeft = index === (activeIndex - 1 + values.length) % values.length;
                const isRight = index === (activeIndex + 1) % values.length;

                if (!isCenter && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={index}
                    className="absolute w-[80vw] rounded-2xl border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-8 text-left shadow-xl shrink-0"
                    initial={isRight ? { x: '100%', opacity: 0, scale: 0.8 } : { x: '-100%', opacity: 0, scale: 0.8 }}
                    animate={{
                      x: isCenter ? 0 : isLeft ? '-90%' : '90%',
                      opacity: isCenter ? 1 : 0.4,
                      scale: isCenter ? 1 : 0.9,
                      zIndex: isCenter ? 10 : 5,
                    }}
                    exit={{
                      x: isLeft ? '-100%' : '100%',
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) setActiveIndex((prev) => (prev + 1) % values.length);
                      if (info.offset.x > 50) setActiveIndex((prev) => (prev - 1 + values.length) % values.length);
                    }}
                  >
                    <div className="mb-6 grid size-11 place-items-center rounded-lg bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <p className="mb-3 text-xs font-black uppercase text-[rgb(var(--color-subtle))]">
                      0{index + 1}
                    </p>
                    <h3 className="text-title">{value.title}</h3>
                    <p className="mt-3 text-body-sm">{value.copy}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Scroll hint dots */}
          <div className="mt-8 flex justify-center gap-2">
            {values.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-[rgb(var(--color-accent))]'
                    : 'w-1.5 bg-[rgb(var(--color-line))] hover:bg-[rgb(var(--color-subtle))]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
