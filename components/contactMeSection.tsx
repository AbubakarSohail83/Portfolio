"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Download,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { socialLinks } from "@/utils/constants";
import { ReCaptcha } from "@/widgets/recaptcha";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Section3DBackground } from "@/components/three/Section3DBackground";

export const ContactMeSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isVerified) {
      setRecaptchaError(true);
      return;
    }

    setIsLoading(true);
    setRecaptchaError(false);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" });
          setIsVerified(false);
        } else {
          throw new Error("Failed to send the message");
        }
      })
      .catch(() => {
        setSuccess(false);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-[var(--surface-secondary)]">
      <Section3DBackground variant="contact" className="z-0 opacity-40" />
      <div className="container relative z-10">
        {/* Section Header */}
        <AnimatedSection mode="single" blur>
          <div className="section-header">
            <div className="section-badge">
              <Mail className="w-4 h-4" />
              Contact
            </div>
            {/* SEO: H2 with hiring intent keywords */}
            <h2 className="section-title">
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </h2>
            {/* SEO: Description targeting hiring managers and recruiters */}
            <p className="section-description">
              Available for remote work with startups, SaaS companies, and international teams. Let&apos;s discuss your project.
            </p>
          </div>
        </AnimatedSection>

        <div className="content-wrapper">
          <AnimatedSection mode="stagger" className="grid lg:grid-cols-2" style={{ gap: '32px' }}>
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card" style={{ padding: '32px' }}>
                <h3 
                  className="font-semibold text-[var(--text-primary)] text-xl"
                  style={{ marginBottom: '28px' }}
                >
                  Send a message
                </h3>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="grid sm:grid-cols-2" style={{ gap: '20px' }}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-body font-medium text-[var(--text-secondary)]"
                        style={{ marginBottom: '10px' }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-body"
                        style={{ padding: '14px 18px' }}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-body font-medium text-[var(--text-secondary)]"
                        style={{ marginBottom: '10px' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-body"
                        style={{ padding: '14px 18px' }}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-body font-medium text-[var(--text-secondary)]"
                      style={{ marginBottom: '10px' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none text-body"
                      style={{ padding: '14px 18px' }}
                      required
                    />
                  </div>

                  <div>
                    <ReCaptcha
                      setIsVerified={setIsVerified}
                      error={recaptchaError}
                      setError={setRecaptchaError}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isVerified || isLoading}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  {success && (
                    <div 
                      className="rounded-xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] animate-feedback-in"
                      style={{ padding: '16px' }}
                      role="alert"
                    >
                      <p className="text-body text-[var(--success)] text-center font-medium">
                        Message sent! I&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {error && (
                    <div 
                      className="rounded-xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] animate-feedback-in"
                      style={{ padding: '16px' }}
                      role="alert"
                    >
                      <p className="text-body text-[var(--error)] text-center font-medium">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <aside className="lg:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Quick Links */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 
                  className="font-semibold text-[var(--text-primary)] text-xl"
                  style={{ marginBottom: '20px' }}
                >
                  Quick Links
                </h3>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} aria-label="Social links">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-all group"
                    style={{ padding: '16px' }}
                    aria-label="View Abubakar Sohail's GitHub profile and open source projects"
                    title="GitHub - Abubakar Sohail"
                  >
                    <div className="flex items-center" style={{ gap: '14px' }}>
                      <Github className="w-5 h-5 text-[var(--text-tertiary)]" aria-hidden="true" />
                      <span className="text-body text-[var(--text-secondary)]">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-all group"
                    style={{ padding: '16px' }}
                    aria-label="Connect with Abubakar Sohail on LinkedIn"
                    title="LinkedIn - Abubakar Sohail"
                  >
                    <div className="flex items-center" style={{ gap: '14px' }}>
                      <Linkedin className="w-5 h-5 text-[var(--text-tertiary)]" aria-hidden="true" />
                      <span className="text-body text-[var(--text-secondary)]">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                  </a>

                  <a
                    href={socialLinks.gmail}
                    className="flex items-center justify-between rounded-xl bg-[var(--surface-tertiary)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-all group"
                    style={{ padding: '16px' }}
                    aria-label="Email Abubakar Sohail directly"
                    title="Email - Abubakar Sohail"
                  >
                    <div className="flex items-center" style={{ gap: '14px' }}>
                      <Mail className="w-5 h-5 text-[var(--text-tertiary)]" aria-hidden="true" />
                      <span className="text-body text-[var(--text-secondary)] truncate">
                        abubakarsohail83@gmail.com
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" aria-hidden="true" />
                  </a>
                </nav>
              </div>

              {/* Availability */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 
                  className="font-semibold text-[var(--text-primary)] text-xl"
                  style={{ marginBottom: '16px' }}
                >
                  Availability
                </h3>
                <div className="flex items-start" style={{ gap: '14px' }}>
                  <MapPin className="w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0" style={{ marginTop: '2px' }} aria-hidden="true" />
                  <p className="text-body text-[var(--text-secondary)]" style={{ lineHeight: '1.7' }}>
                    Open to remote roles globally and on-site opportunities in Pakistan and the UK. No visa sponsorship required for UK engagements.
                  </p>
                </div>
              </div>

              {/* Resume */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 
                  className="font-semibold text-[var(--text-primary)] text-xl"
                  style={{ marginBottom: '16px' }}
                >
                  Resume
                </h3>
                <a 
                  href="/as.pdf" 
                  download="Abubakar_Sohail_Software_Engineer_Resume.pdf"
                  className="btn-secondary w-full"
                  aria-label="Download Abubakar Sohail's software engineer resume (PDF)"
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </aside>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <footer className="border-t border-[var(--border-primary)]" style={{ marginTop: '64px', paddingTop: '32px' }}>
          <div 
            className="flex flex-col sm:flex-row items-center justify-between text-body text-[var(--text-muted)]"
            style={{ gap: '16px' }}
          >
            <p>&copy; {new Date().getFullYear()} Abubakar Sohail. All rights reserved.</p>
            <p>Senior Full Stack Software Engineer</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
