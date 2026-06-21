import { useRef } from 'react';
import { motion } from 'framer-motion';

function useRipple() {
  const ref = useRef(null);

  const triggerRipple = (e) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position:absolute;pointer-events:none;border-radius:50%;
      width:${size}px;height:${size}px;
      left:${x - size / 2}px;top:${y - size / 2}px;
      background:currentColor;opacity:0.12;
      transform:scale(0);animation:ripple-expand 480ms ease-out forwards;
    `;

    if (!document.getElementById('ripple-kf')) {
      const style = document.createElement('style');
      style.id = 'ripple-kf';
      style.textContent = '@keyframes ripple-expand{to{transform:scale(1);opacity:0;}}';
      document.head.appendChild(style);
    }

    el.style.overflow = 'hidden';
    el.style.position = 'relative';
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  };

  return { ref, triggerRipple };
}

export function Button({
  as = 'button',
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const { ref, triggerRipple } = useRipple();

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

  const handleClick = (e) => {
    triggerRipple(e);
    onClick?.(e);
  };

  if (as === 'a') {
    return (
      <motion.a
        ref={ref}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
