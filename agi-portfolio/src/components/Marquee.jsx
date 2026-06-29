import { motion } from 'framer-motion';

/**
 * Continuous marquee for social proof/products
 */
export function Marquee({ items, speed = 50, className = "" }) {
  // Duplicate items for a seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className={`flex overflow-hidden whitespace-nowrap py-4 sm:py-6 lg:py-8 ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-[clamp(2rem,6vw,4rem)] px-6"
        animate={{ x: [0, "-33.33%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {displayItems.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.75rem,2.5vw,1rem)] font-black uppercase tracking-[0.2em] text-[rgb(var(--color-ink))]"
          >
            <span className="size-[clamp(0.35rem,1.2vw,0.6rem)] rounded-full bg-[rgb(var(--color-accent))]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
