import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { company, contactCards } from '../utils/content';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

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
              For professional inquiries, supply quotations, or institutional partnership opportunities, reach out via our direct channels or the form below.
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
                <a href={`mailto:${company.contact.email}`} className="mt-3 inline-flex items-center gap-2 text-lg font-black">
                  {company.contact.email}
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="rounded-lg border border-[rgb(var(--color-line))] bg-[rgb(var(--color-panel))] p-5 shadow-sm sm:p-7"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                aria-label="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="input-field mt-4 min-h-40 resize-none"
              />

              <motion.div
                className="pt-5"
                animate={isSubmitted ? { scale: 0.98 } : { scale: 1 }}
              >
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? 'Message Sent' : 'Send Message'}
                  {!isSubmitted && <Send size={18} />}
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
