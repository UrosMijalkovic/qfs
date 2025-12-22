"use client";

import { useState } from "react";

// Hero background component
const HeroBackground = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '24rem',
        height: '24rem',
        opacity: 0.1,
        background: 'linear-gradient(135deg, #A5040C 0%, transparent 60%)',
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        filter: 'blur(60px)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '20rem',
        height: '20rem',
        opacity: 0.07,
        background: 'linear-gradient(225deg, #A5040C 0%, transparent 60%)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        filter: 'blur(50px)',
      }}
    />
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="contactDiagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contactDiagonalLines)" />
    </svg>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', backgroundColor: '#0D0D0D', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '48rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1 }}>
              Get in Touch
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Ready to discuss your challenges? We'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem' }}>
            {/* Form */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#171717', marginBottom: '1.5rem' }}>
                Send us a message
              </h2>

              {isSubmitted ? (
                <div style={{ padding: '3rem', backgroundColor: '#F5F5F5', borderRadius: '1rem', textAlign: 'center' }}>
                  <div style={{ width: '4rem', height: '4rem', margin: '0 auto 1.5rem', backgroundColor: '#A5040C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg style={{ width: '2rem', height: '2rem', color: '#FFFFFF' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#171717', marginBottom: '0.5rem' }}>
                    Thank you for reaching out!
                  </h3>
                  <p style={{ color: '#737373' }}>
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #E5E5E5',
                          fontSize: '1rem',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #E5E5E5',
                          fontSize: '1rem',
                          outline: 'none',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <div>
                      <label htmlFor="company" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #E5E5E5',
                          fontSize: '1rem',
                          outline: 'none',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #E5E5E5',
                          fontSize: '1rem',
                          outline: 'none',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #E5E5E5',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    >
                      <option value="">Select a topic</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="business-advisory">Business Advisory</option>
                      <option value="sustainability">Sustainability & Digital</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#171717', marginBottom: '0.5rem' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #E5E5E5',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#A5040C'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem 2rem',
                      borderRadius: '0.5rem',
                      backgroundColor: isSubmitting ? '#7A0309' : '#A5040C',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: 500,
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#7A0309')}
                    onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#A5040C')}
                  >
                    {isSubmitting ? (
                      <>
                        <svg style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', animation: 'spin 1s linear infinite' }} fill="none" viewBox="0 0 24 24">
                          <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg style={{ width: '1.25rem', height: '1.25rem', marginLeft: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#171717', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', backgroundColor: 'rgba(165, 4, 12, 0.1)' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#A5040C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#171717', marginBottom: '0.25rem' }}>Email</h3>
                    <a href="mailto:contact@qfs.rs" style={{ color: '#A5040C', textDecoration: 'none', fontSize: '0.9375rem' }}>
                      contact@qfs.rs
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', backgroundColor: 'rgba(165, 4, 12, 0.1)' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#A5040C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#171717', marginBottom: '0.25rem' }}>Phone</h3>
                    <a href="tel:+381111234567" style={{ color: '#A5040C', textDecoration: 'none', fontSize: '0.9375rem' }}>
                      +381 11 123 4567
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', backgroundColor: 'rgba(165, 4, 12, 0.1)' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#A5040C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#171717', marginBottom: '0.25rem' }}>Office</h3>
                    <p style={{ color: '#737373', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      Belgrade, Serbia
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', backgroundColor: 'rgba(165, 4, 12, 0.1)' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem', color: '#A5040C' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.47 2H3.53a1.45 1.45 0 00-1.47 1.43v17.14A1.45 1.45 0 003.53 22h16.94a1.45 1.45 0 001.47-1.43V3.43A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.4v4.33h-3v-9h2.89v1.23h.04a3.18 3.18 0 012.85-1.57c3.05 0 3.61 2 3.61 4.61v4.73z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#171717', marginBottom: '0.25rem' }}>LinkedIn</h3>
                    <a href="https://linkedin.com/company/qfs" target="_blank" rel="noopener noreferrer" style={{ color: '#A5040C', textDecoration: 'none', fontSize: '0.9375rem' }}>
                      Follow us on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#F5F5F5', borderRadius: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#171717', marginBottom: '1rem' }}>Office Hours</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9375rem', color: '#737373' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Monday - Friday</span>
                    <span style={{ fontWeight: 500, color: '#171717' }}>9:00 - 18:00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Saturday - Sunday</span>
                    <span style={{ fontWeight: 500, color: '#171717' }}>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Visual */}
      <section style={{ backgroundColor: '#0D0D0D', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '1rem' }}>
            We look forward to hearing from you
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '32rem', margin: '0 auto' }}>
            Whether you're facing a complex challenge or exploring opportunities, our team is ready to help.
          </p>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
