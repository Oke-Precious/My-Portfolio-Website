import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec5">
      <div className="text-center">
        <header className="secHeader" data-aos="fade-right">
          TESTIMONIALS
        </header>
        <h3 className="secTitle my-3 mb-5" data-aos="fade-right" data-aos-delay="200">
          What Clients Say
        </h3>
      </div>

      <div className="servicesContainer">
        <div className="eachService" data-aos="fade-up">
          <div className="testimonial-quote">
            <i
              className="fas fa-quote-left"
              style={{ fontSize: '24px', color: 'var(--text-secondary)' }}
            ></i>
          </div>
          <p className="testimonial-text">
            "Oke Precious delivered exceptional work on our e-commerce platform. The
            attention to detail and code quality exceeded our expectations. Highly
            recommended!"
          </p>
          <div className="testimonial-author">
            <h5>Sarah Johnson</h5>
            <p>CEO, TechStart Nigeria</p>
          </div>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="200">
          <div className="testimonial-quote">
            <i
              className="fas fa-quote-left"
              style={{ fontSize: '24px', color: 'var(--text-secondary)' }}
            ></i>
          </div>
          <p className="testimonial-text">
            "Working with Oke was a great experience. He understood our vision perfectly and
            delivered a stunning UI that our users love. Professional and timely."
          </p>
          <div className="testimonial-author">
            <h5>Michael Adebayo</h5>
            <p>Founder, Bean Scene Cafe</p>
          </div>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="400">
          <div className="testimonial-quote">
            <i
              className="fas fa-quote-left"
              style={{ fontSize: '24px', color: 'var(--text-secondary)' }}
            ></i>
          </div>
          <p className="testimonial-text">
            "The banking app interface he designed is clean, intuitive, and secure. Our
            customers compliment it constantly. Great attention to user experience."
          </p>
          <div className="testimonial-author">
            <h5>Chioma Okonkwo</h5>
            <p>Product Manager, PreciousBank</p>
          </div>
        </div>
      </div>
    </section>
  );
}
