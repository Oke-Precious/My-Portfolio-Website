import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    aboutProject: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const data = new FormData();
    data.append('_subject', `New Portfolio Inquiry: ${formData.subject || 'Collaboration'}`);
    data.append('_captcha', 'false');
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('aboutProject', formData.aboutProject);

    try {
      const response = await fetch(`https://formsubmit.co/${personalInfo.email}`, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✓ Message received! Thank you for reaching out. I will respond within 24 hours.',
        });
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          aboutProject: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please connect with me directly on WhatsApp or Email.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus(null);
      }, 7000);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Get in Touch
      </div>
      <h2 className="section-title" data-aos="fade-right" data-aos-delay="100">
        Let's Build Something Great Together
      </h2>
      <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200">
        Currently open to developer roles, software internships, and high-impact engineering contracts.
      </p>

      <div
        className="contact-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '36px',
          alignItems: 'start',
        }}
      >
        {/* Contact Coordinates & Social Cards */}
        <div data-aos="fade-up" data-aos-delay="300">
          <GlassCard style={{ padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-head)', marginBottom: '20px' }}>
              Direct Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan-primary)',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                    Email
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-head)', textDecoration: 'none' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--indigo-primary)',
                    fontSize: '16px',
                    flexShrink: 0,
                  }}
                >
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <div style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                    Location & Timezone
                  </div>
                  <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-head)' }}>
                    {personalInfo.location} ({personalInfo.timezone})
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(37, 211, 102, 0.1)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}
                >
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <div style={{ fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                    Instant Chat
                  </div>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '14.5px', fontWeight: 600, color: '#25D366', textDecoration: 'none' }}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Social Profiles Glass Card */}
          <GlassCard style={{ padding: '24px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-head)', marginBottom: '14px' }}>
              Connect Across Platforms
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { name: 'GitHub', icon: 'fab fa-github', url: personalInfo.githubUrl, color: '#fff' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: personalInfo.linkedinUrl, color: '#0a66c2' },
                { name: 'X / Twitter', icon: 'fab fa-x-twitter', url: personalInfo.twitterUrl, color: '#38BDF8' },
                { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: personalInfo.whatsappUrl, color: '#25d366' },
                { name: 'Instagram', icon: 'fab fa-instagram', url: personalInfo.instagramUrl, color: '#e1306c' },
                { name: 'Facebook', icon: 'fab fa-facebook-f', url: personalInfo.facebookUrl, color: '#1877f2' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-head)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12.5px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.color = 'var(--text-head)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={s.icon} style={{ color: s.color }}></i>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Contact Form Card */}
        <GlassCard data-aos="fade-up" data-aos-delay="400" style={{ padding: '36px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-head)', marginBottom: '8px' }}>
            Send a Direct Message
          </h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Fill out the details below and I will get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row-2">
              <div>
                <label
                  htmlFor="fullName"
                  style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}
                >
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(6, 9, 19, 0.7)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-head)',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(6, 9, 19, 0.7)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-head)',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}
              >
                SUBJECT *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Full-Stack Role / Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(6, 9, 19, 0.7)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-head)',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
              />
            </div>

            <div>
              <label
                htmlFor="aboutProject"
                style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}
              >
                PROJECT DETAILS / MESSAGE *
              </label>
              <textarea
                id="aboutProject"
                name="aboutProject"
                required
                rows="5"
                placeholder="Tell me about your application goals, scope, and timeline..."
                value={formData.aboutProject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  background: 'rgba(6, 9, 19, 0.7)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-head)',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--glass-border)')}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="glass-btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '14.5px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status && (
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: status.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${status.type === 'success' ? '#10B981' : '#EF4444'}`,
                  color: status.type === 'success' ? '#10B981' : '#EF4444',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {status.message}
              </div>
            )}
          </form>
        </GlassCard>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
