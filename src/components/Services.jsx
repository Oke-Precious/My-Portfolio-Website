import React from 'react';

export default function Services() {
  return (
    <section id="services" className="sec5">
      <div className="text-center">
        <header className="secHeader" data-aos="fade-right">
          SERVICES
        </header>
        <h3 className="secTitle my-3 mb-5" data-aos="fade-right" data-aos-delay="200">
          How I Can Help You
        </h3>
      </div>

      <div className="servicesContainer">
        <div className="eachService" data-aos="fade-up">
          <button className="serviceIcon" aria-label="Full Stack Web Development">
            <i className="fas fa-terminal"></i>
          </button>
          <h5>Full Stack Web Development</h5>
          <p>
            Scalable, secure, and lightning-fast web applications built with modern frameworks
            and best practices.
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="200">
          <button
            className="serviceIcon"
            style={{ backgroundColor: '#006A63' }}
            aria-label="Responsive Web Design"
          >
            <i className="fa-solid fa-mobile-screen"></i>
          </button>
          <h5>Responsive Web Design</h5>
          <p>
            I ensure your website looks perfect and works seamlessly across all devices and
            screen sizes.
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="400">
          <button
            className="serviceIcon bg-secondary"
            aria-label="Backend Development"
          >
            <i className="fa-solid fa-server"></i>
          </button>
          <h5>Backend Development</h5>
          <p>
            I develop secure and scalable server-side systems to handle data,
            authentication, and application logic.
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="600">
          <button
            className="serviceIcon bg-danger"
            aria-label="API Development & Integration"
          >
            <i className="fa-solid fa-plug"></i>
          </button>
          <h5>API Development & Integration</h5>
          <p>
            I create and integrate APIs that enable seamless communication between
            different systems and services.
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="800">
          <button
            className="serviceIcon text-black"
            style={{ backgroundColor: '#F2F4F6' }}
            aria-label="E-commerce Website"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <h5>E-commerce Website</h5>
          <p>
            I develop online stores with smooth navigation and optimized user experience for
            better sales
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="1000">
          <button
            className="serviceIcon bg-warning text-black"
            aria-label="Website Redesign"
          >
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
          <h5>Website Redesign</h5>
          <p>
            I transform outdated websites into modern, visually appealing, and
            high-performing platforms.
          </p>
        </div>

        <div className="eachService" data-aos="fade-up" data-aos-delay="1200">
          <button
            className="serviceIcon bg-info text-dark"
            aria-label="Banking & Finance UI Design"
          >
            <i className="fa-solid fa-building-columns"></i>
          </button>
          <h5>Banking & Finance UI Design</h5>
          <p>
            I design secure, modern, and intuitive banking and financial interfaces for
            seamless digital transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
