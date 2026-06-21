import { useState, useEffect, useRef } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const observerRef = useRef(null);

  // Track scroll for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Small delay so mobile menu closes before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[rgb(var(--color-line))] bg-[rgb(var(--color-canvas)/0.82)] backdrop-blur-xl transition-all duration-300 ${
        scrolled ? 'shadow-md shadow-black/5' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-fluid max-w-7xl flex items-center justify-between py-3">
        <motion.a
          href="#home"
          className="flex items-center gap-3 md:gap-4"
          aria-label={`${company.name} home`}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--color-accent))] shadow-lg shadow-blue-900/20">
            <span className="text-[15px] font-black text-white tracking-tighter">AGI</span>
          </div>
          <div className="flex flex-col border-l border-[rgb(var(--color-line))] pl-3 md:pl-4">
            <span className="text-[14px] md:text-[15px] font-bold tracking-tight text-[rgb(var(--color-ink))] leading-none">
              AGI ENTERPRISE
            </span>
            <span className="mt-1 text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-[rgb(var(--color-subtle))] leading-none uppercase">
              Limited
            </span>
          </div>
        </motion.a>

        {/* Desktop nav pill */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel)/0.7)] p-1 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
                style={{
                  color: isActive
                    ? 'rgb(var(--color-ink))'
                    : 'rgb(var(--color-muted-ink))',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-[rgb(var(--color-panel-soft))]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] text-[rgb(var(--color-muted-ink))] shadow-sm transition-colors hover:text-[rgb(var(--color-ink))]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.9, rotate: 15 }}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <Button
            as="a"
            href="#contact"
            size="sm"
            className="hidden sm:inline-flex gap-2"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
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
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-fluid max-w-7xl flex flex-col gap-1 py-3">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-ink))]'
                        : 'text-[rgb(var(--color-muted-ink))] hover:bg-[rgb(var(--color-panel-soft))] hover:text-[rgb(var(--color-ink))]'
                    }`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
