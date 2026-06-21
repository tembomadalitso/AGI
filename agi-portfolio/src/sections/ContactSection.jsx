import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { company, contactCards } from '../utils/content';

const MAX_MESSAGE = 500;

function FloatingField({ error, children }) {
  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1 text-xs font-semibold text-red-500"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactSection() {
  const uid = useId();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (field, value) => {
    if (field === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Enter a valid email address';
    }
    if (['name', 'subject', 'message'].includes(field) && touched[field] && !value.trim()) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const hasErrors = ['name', 'email', 'subject', 'message'].some(
      (f) => validate(f, formData[f])
    );
    if (hasErrors) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTouched({});
    }, 4000);
  };

  const msgLen = formData.message.length;
  const msgNearLimit = msgLen > MAX_MESSAGE * 0.8;

  return (
    <Section id="contact" background="muted">
      <Container>
        <motion.div
          className="mx-auto max-w-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.span
              className="text-caption text-[rgb(var(--color-accent))]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Get in Touch
            </motion.span>
            <motion.h2
              className="text-4xl font-black leading-tight text-[rgb(var(--color-ink))] sm:text-5xl lg:col-start-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Start a conversation with our procurement team.
            </motion.h2>
            <motion.p
              className="text-body lg:col-start-2 lg:row-span-2 lg:row-start-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              For inquiries, quotations, or partnership opportunities, use the contact details below or send a short request through the form.
            </motion.p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-5 shadow-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[rgb(var(--color-panel-soft))] text-[rgb(var(--color-accent))]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-black uppercase text-[rgb(var(--color-subtle))]">
                        {item.label}
                      </p>
                      <p className="text-base font-bold text-[rgb(var(--color-ink))]">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              <div className="rounded-lg bg-[rgb(var(--color-ink))] p-6 text-[rgb(var(--color-canvas))]">
                <p className="text-xs font-black uppercase text-white/45">Direct email</p>
                <a href={`mailto:${company.contact.email}`} className="mt-3 inline-flex items-center gap-2 text-lg font-black hover:text-[rgb(var(--color-accent-soft))] transition-colors">
                  {company.contact.email}
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-5 shadow-sm sm:p-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Success state */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                    >
                      <CheckCircle2 size={52} className="text-[rgb(var(--color-accent))]" />
                    </motion.div>
                    <h3 className="text-2xl font-black text-[rgb(var(--color-ink))]">Request received</h3>
                    <p className="max-w-xs text-body">
                      We'll review your message and get back to you shortly. Thank you for reaching out.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FloatingField error={validate('name', formData.name)}>
                        <input
                          id={`${uid}-name`}
                          type="text"
                          name="name"
                          placeholder="Name *"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          className={`input-field ${touched.name && validate('name', formData.name) ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                      </FloatingField>
                      <FloatingField error={validate('email', formData.email)}>
                        <input
                          id={`${uid}-email`}
                          type="email"
                          name="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          aria-required="true"
                          className={`input-field ${touched.email && validate('email', formData.email) ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                      </FloatingField>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                      />
                      <FloatingField error={validate('subject', formData.subject)}>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject *"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          className={`input-field ${touched.subject && validate('subject', formData.subject) ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                      </FloatingField>
                    </div>

                    <FloatingField error={validate('message', formData.message)}>
                      <textarea
                        name="message"
                        placeholder="Message *"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows={6}
                        className={`input-field mt-4 min-h-40 resize-none ${touched.message && validate('message', formData.message) ? 'border-red-400 focus:border-red-400' : ''}`}
                      />
                      {/* Character counter */}
                      <div className="mt-1 flex justify-end">
                        <span className={`text-xs font-semibold tabular-nums transition-colors ${msgNearLimit ? 'text-amber-500' : 'text-[rgb(var(--color-subtle))]'}`}>
                          {msgLen}/{MAX_MESSAGE}
                        </span>
                      </div>
                    </FloatingField>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full gap-2"
                      >
                        Send request
                        <Send size={18} />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
