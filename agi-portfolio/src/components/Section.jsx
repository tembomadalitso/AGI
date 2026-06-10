import { motion } from 'framer-motion';

export function Section({
  children,
  className = '',
  id = '',
  size = 'md',
  background = 'default',
}) {
  const sizes = {
    sm: 'section-spacing-sm',
    md: 'section-spacing',
  };

  const backgrounds = {
    default: 'bg-[rgb(var(--color-canvas))]',
    muted: 'bg-[rgb(var(--color-muted))]',
    gradient: 'hero-surface',
  };

  return (
    <motion.section
      id={id}
      className={`relative ${sizes[size]} ${backgrounds[background]} transition-colors duration-500 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
}
