import { FormEvent, useState } from 'react';
import { Clock, Mail, Loader2, AlertCircle } from 'lucide-react';
import FadeInSection from '../components/ui/FadeInSection';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) {
      next.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) next.message = 'Message is required';
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    console.log('Starting Firestore submission...', form);
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...form,
        createdAt: serverTimestamp(),
      });
      console.log('Submission successful, doc ID:', docRef.id);
      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  return (
    <>
      <section className="section-pad border-b border-border">
        <div className="container-content max-w-2xl">
          <p className="font-accent text-sm font-medium text-accent">Contact</p>
          <h1 className="mt-4 text-display-sm">Let&apos;s talk about your workflow</h1>
        </div>
      </section>

      <FadeInSection className="section-pad">
        <div className="container-content grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-base leading-relaxed text-muted">
              Tell us what&apos;s slowing your team down. We typically respond within one business day.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Email</p>
                  <a
                    href="mailto:subhankhanwork1@gmail.com"
                    className="mt-1 block text-ink transition-colors hover:text-accent"
                  >
                    subhankhanwork1@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Timezone</p>
                  <p className="mt-1 text-ink">Remote-first · United States (US time zones)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="surface-card p-8">
            {submitted ? (
              <div className="py-8">
                <h2 className="font-heading text-xl font-semibold">Message sent</h2>
                <p className="mt-3 text-sm text-muted">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  type="button"
                  className="btn-ghost mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6">
                  <label htmlFor="name" className="label-field">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="input-field"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="label-field">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input-field"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="label-field">
                    Company <span className="normal-case text-muted">(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="input-field"
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    autoComplete="organization"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="label-field">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-field resize-y"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="mb-6 flex items-center gap-2 rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" />
                    <p>{submitError}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
                  disabled={loading}
                >
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </FadeInSection>
    </>
  );
};

export default Contact;
