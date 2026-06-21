import { motion } from 'framer-motion';

export function Marquee({ items, speed = 40, reverse = false, className = "" }) {
  // To create a seamless loop, we repeat the items
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative flex overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8"
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-widest text-[rgb(var(--color-muted-ink))] opacity-60">
              {item}
            </span>
            <span className="ml-16 size-2 rounded-full bg-[rgb(var(--color-accent))] opacity-30" />
          </div>
        ))}
      </motion.div>

      {/* Fades on the edges for a premium look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgb(var(--color-canvas))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[rgb(var(--color-canvas))] to-transparent" />
    </div>
  );
}
