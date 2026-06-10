import { motion } from 'framer-motion';

export function Button({
  as = 'button',
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseClass = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };
  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  const classes = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'a') {
    return (
      <motion.a
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
