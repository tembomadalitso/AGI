import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hover = true,
  icon: Icon,
  title,
  description,
  ...props
}) {
  const content = (
    <div className="flex flex-col h-full">
      {Icon && (
        <motion.div
          className="mb-5 flex size-11 items-center justify-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <Icon size={22} strokeWidth={1.8} />
        </motion.div>
      )}
      {title && <h3 className="text-title mb-3">{title}</h3>}
      {description && (
        <p className="text-body flex-1">{description}</p>
      )}
      {children}
    </div>
  );

  return (
    <motion.div
      className={`card card-shimmer ${hover ? 'card-hover' : ''} p-6 ${className}`}
      whileHover={hover ? { y: -6 } : {}}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {content}
    </motion.div>
  );
}
