import { motion } from 'framer-motion';

/**
 * Continuous marquee for social proof/products
 */
export function Marquee({ items, speed = 50, className = "" }) {
  // Duplicate items for a seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className={`flex overflow-hidden whitespace-nowrap py-4 ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-12 px-6"
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
            className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-[rgb(var(--color-ink))]"
          >
            <span className="size-2 rounded-full bg-[rgb(var(--color-accent))]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
