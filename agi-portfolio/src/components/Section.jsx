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
    default: '',
    gradient: 'hero-surface',
    muted: 'bg-[rgb(var(--color-panel-soft)/0.3)]',
  };

  // We now use a uniform background pattern for all sections
  return (
    <motion.section
      id={id}
      className={`relative ${sizes[size]} ${backgrounds[background]} transition-colors duration-500 ${className}`}
      initial={{ opacity: 0, x: -50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
    >
      {children}
    </motion.section>
  );
}
