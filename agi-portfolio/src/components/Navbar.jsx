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
  const drawerRef = useRef(null);

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

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trapping
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const focusableElements = drawerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    // Focus first element on open
    firstElement.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
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
          <div className="flex flex-col border-l border-[rgb(var(--color-line)/0.5)] pl-3 md:pl-4">
            <span className="text-[14px] md:text-[15px] font-bold tracking-tight text-[rgb(var(--color-ink))] leading-none">
              AGI ENTERPRISE
            </span>
            <span className="mt-1 text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-[rgb(var(--color-subtle))] leading-none uppercase">
              Limited
            </span>
          </div>
        </motion.a>

        {/* Desktop nav pill */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-[rgb(var(--color-line)/0.4)] bg-[rgb(var(--color-panel)/0.4)] p-1 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="group relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300"
                style={{
                  color: isActive
                    ? '#fff'
                    : 'rgb(var(--color-muted-ink))',
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-slate-950 shadow-lg"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Magnifying Glass Hover Effect */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full border border-[rgb(var(--color-accent)/0.5)] opacity-0 scale-90 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:blur-0" />
                )}

                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-lg border border-[rgb(var(--color-line)/0.4)] bg-[rgb(var(--color-panel)/0.5)] text-[rgb(var(--color-muted-ink))] backdrop-blur-md shadow-sm transition-all hover:text-[rgb(var(--color-ink))] hover:scale-110"
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
            className="hidden sm:inline-flex gap-2 glass-magnify"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
          >
            Get in touch
            <ArrowUpRight size={16} />
          </Button>

          <motion.button
            className="grid size-10 place-items-center rounded-lg border border-[rgb(var(--color-line)/0.4)] bg-[rgb(var(--color-panel)/0.5)] lg:hidden backdrop-blur-md"
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

    </motion.nav>

    {/* Mobile Navigation Drawer */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="fixed inset-y-0 left-0 z-[70] w-[85%] max-w-sm bg-[rgb(var(--color-canvas)/0.95)] backdrop-blur-2xl border-r border-[rgb(var(--color-line)/0.4)] shadow-2xl lg:hidden flex flex-col"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between p-6 border-b border-[rgb(var(--color-line)/0.4)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--color-accent))] shadow-lg shadow-blue-900/20">
                  <span className="text-[15px] font-black text-white tracking-tighter">AGI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[rgb(var(--color-ink))] leading-none">
                    AGI ENTERPRISE
                  </span>
                  <span className="mt-1 text-[10px] font-medium text-[rgb(var(--color-subtle))] leading-none uppercase">
                    Limited
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-ink))]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-5 py-4 text-base font-bold transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-xl'
                        : 'text-[rgb(var(--color-muted-ink))] hover:bg-[rgb(var(--color-panel-soft)/0.8)] hover:text-[rgb(var(--color-ink))]'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                    {isActive && <motion.div layoutId="active-dot" className="size-1.5 rounded-full bg-white" />}
                  </motion.a>
                );
              })}
            </div>

            <div className="p-6 border-t border-[rgb(var(--color-line)/0.4)]">
              <Button
                as="a"
                href="#contact"
                className="w-full justify-center gap-2"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              >
                Get in touch
                <ArrowUpRight size={18} />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
