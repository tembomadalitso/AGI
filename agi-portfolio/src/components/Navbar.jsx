import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Button } from './Button';
import { company } from '../utils/content';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Values', href: '#values' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-[rgb(var(--color-line))] bg-[rgb(var(--color-canvas)/0.78)] backdrop-blur-xl transition-colors duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-fluid max-w-7xl flex items-center justify-between py-3">
        <motion.a
          href="#home"
          className="flex items-center gap-4"
          aria-label={`${company.name} home`}
          whileHover={{ opacity: 0.9 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--color-accent))] shadow-lg shadow-blue-900/20">
            <span className="text-[15px] font-bold text-white tracking-tighter">AGI</span>
          </div>
          <div className="flex flex-col border-l border-[rgb(var(--color-line))] pl-4">
            <span className="text-[15px] font-bold tracking-tight text-[rgb(var(--color-ink))] leading-none">
              AGI ENTERPRISE
            </span>
            <span className="mt-1 text-[11px] font-medium tracking-[0.2em] text-[rgb(var(--color-subtle))] leading-none uppercase">
              Limited
            </span>
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="relative text-[14px] font-medium text-[rgb(var(--color-muted-ink))] transition-colors hover:text-[rgb(var(--color-accent))]"
              whileHover={{ y: -1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] text-[rgb(var(--color-muted-ink))] shadow-sm transition-colors hover:text-[rgb(var(--color-ink))]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </motion.button>

          <Button
            as="a"
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex gap-2"
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Button>

          <motion.button
            className="grid size-10 place-items-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-[rgb(var(--color-line))] bg-[rgb(var(--color-canvas))] lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-fluid max-w-7xl flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-[rgb(var(--color-muted-ink))] hover:bg-[rgb(var(--color-panel-soft))] hover:text-[rgb(var(--color-ink))]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
