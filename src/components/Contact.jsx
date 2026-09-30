import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    aboutProject: 'Hello Oke Precious...',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const data = new FormData();
    data.append('_subject', 'New Portfolio Contact');
    data.append('_captcha', 'false');
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('aboutProject', formData.aboutProject);

    try {
      await fetch('https://formsubmit.co/okeprecido@gmail.com', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      setStatus({
        type: 'success',
        message: '✓ Sent! Thank you for your message.',
      });
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        aboutProject: '',
      });

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="sec6" id="contact">
      <div className="getinTouch">
        <div>
          <header className="secHeader" data-aos="fade-right">
            GET IN TOUCH
          </header>
          <h2 className="my-3" data-aos="fade-right" data-aos-delay="200">
            Let's create something <br />
            <i>legendary.</i>
          </h2>
          <p className="my-3 currently" data-aos="fade-right" data-aos-delay="300">
            Currently accepting new projects and creative collaborations. <br />
            I'd love to hear about your vision.
          </p>
        </div>

        <div className="my-5">
          <div
            className="d-flex gap-3 my-2 align-items-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="contact-icon">
              <i className="fa far fa-envelope"></i>
            </div>
            <div>
              <p className="emailMe">EMAIL ME</p>
              <p className="fw-semibold currently">okeprecido@gmail.com</p>
            </div>
          </div>

          <div
            className="d-flex gap-3 my-4 align-items-center"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="contact-icon">
              <i className="fa far fa-envelope"></i>
            </div>
            <div>
              <p className="emailMe">LOCATION</p>
              <p className="fw-semibold currently">Oyo State, Nigeria (GMT+1)</p>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 flex-wrap socialMedia">
          <a
            href="mailto:okeprecido@gmail.com"
            data-aos="zoom-in"
            aria-label="Send email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/oke-precious-581ba5402/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="200"
            style={{ backgroundColor: '#0a66c2' }}
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://x.com/specrpt"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="300"
            style={{ backgroundColor: '#000000' }}
            aria-label="X Twitter profile"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://wa.me/+2348101238416"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
            style={{ backgroundColor: '#25d366' }}
            aria-label="WhatsApp chat"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/iam_spec1al"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="500"
            style={{ backgroundColor: '#e1306c' }}
            aria-label="Instagram profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/psspecial"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="600"
            style={{ backgroundColor: '#1877f2' }}
            aria-label="Facebook profile"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://github.com/Oke-Precious"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="700"
            style={{ backgroundColor: '#333333' }}
            aria-label="GitHub profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      <div className="sendMessageCon" data-aos="fade-left" data-aos-delay="600">
        <div className="form-container">
          <div className="heading">Contact Me</div>
          <form id="contactForm" className="form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />

            <div className="d-flex flex-md-wrap flex-lg-nowrap gap-3">
              <div className="w-100">
                <label htmlFor="fullName" className="emailMe">
                  FULL NAME
                </label>
                <input
                  required
                  className="input"
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Oke Precious"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-100">
                <label htmlFor="email" className="emailMe">
                  EMAIL
                </label>
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="okeprecido@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-100 my-3">
              <label htmlFor="subject" className="emailMe">
                SUBJECT
              </label>
              <input
                required
                className="input"
                type="text"
                name="subject"
                id="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="w-100 my-3">
              <label htmlFor="aboutProject" className="emailMe">
                ABOUT YOUR PROJECT
              </label>
              <textarea
                required
                className="input aboutProject"
                name="aboutProject"
                id="aboutProject"
                placeholder="Tell me about your project..."
                value={formData.aboutProject}
                onChange={handleChange}
              />
            </div>

            <input
              id="submitBtn"
              className="login-button"
              type="submit"
              value={isSubmitting ? 'Sending...' : 'Send Message'}
              disabled={isSubmitting}
            />

            {status && (
              <div
                className={status.type === 'success' ? 'success-message' : 'error-message'}
                style={{
                  textAlign: 'center',
                  color: status.type === 'success' ? '#0D9488' : '#ef4444',
                  fontWeight: 600,
                  marginTop: '15px',
                  fontSize: '18px',
                }}
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
