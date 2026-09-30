import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="sec3">
      <header className="secHeader" data-aos="fade-right">
        EXPERTISE
      </header>
      <h3
        className="secTitle coreCompetencies my-3 mb-5"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Core Competencies
      </h3>

      <div className="d-lg-flex d-md-flex d-sm-flex gap-lg-5 gap-md-3 gap-sm-5 flex-wrap justify-content-lg-between">
        {/* Frontend Development */}
        <div className="expertise shadow mt-3 bgWhite" data-aos="fade-right">
          <div className="d-flex align-items-center gap-4 mb-lg-5 mb-md-5 mb-5">
            <i className="fas fa-code expertiseIcon"></i>
            <h5>Frontend Development</h5>
          </div>
          <div className="tools">
            <button data-aos="fade-up">
              <i className="fab fa-html5"></i> HTML5
            </button>
            <button data-aos="fade-up" data-aos-delay="200">
              <i className="fab fa-css3-alt"></i> CSS
            </button>
            <button data-aos="fade-up" data-aos-delay="400">
              <i className="fab fa-js"></i> JavaScript ES6+
            </button>
            <button data-aos="fade-up" data-aos-delay="600">
              <i className="fab fa-react"></i> REACT
            </button>
            <button data-aos="fade-up" data-aos-delay="800">
              <i className="fab fa-bootstrap"></i>Bootstrap
            </button>
            <button data-aos="fade-up" data-aos-delay="1000">
              <i className="fas fa-wind"></i>Tailwind CSS
            </button>
          </div>
        </div>

        {/* Backend Development */}
        <div
          className="expertise shadow mt-3 bgBlue"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="d-flex align-items-center gap-4 mb-lg-5 mb-md-5 mb-5">
            <i className="fas fa-server expertiseIcon"></i>
            <h5>Backend Development</h5>
          </div>
          <div className="tools">
            <button data-aos="fade-up">
              <i className="fas fa-fire"></i> Firebase
            </button>
            <button data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-database"></i> MongoDB
            </button>
            <button data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-plug"></i> APIs
            </button>
            <button data-aos="fade-up" data-aos-delay="600">
              <i className="fab fa-git-alt"></i> Express.js
            </button>
            <button data-aos="fade-up" data-aos-delay="800">
              <i className="fab fa-node-js"></i> Node.js
            </button>
          </div>
        </div>

        {/* MERN Stack */}
        <div
          className="expertise shadow mt-3 bgGray"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="d-flex align-items-center gap-4 mb-lg-5 mb-md-5 mb-5">
            <i className="fas fa-cogs expertiseIcon"></i>
            <h5>MERN Stack</h5>
          </div>
          <div className="tools">
            <button data-aos="fade-up">
              <i className="fas fa-database"></i>MongoDB
            </button>
            <button data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-server"></i>Express
            </button>
            <button data-aos="fade-up" data-aos-delay="400">
              <i className="fab fa-react"></i> React
            </button>
            <button data-aos="fade-up" data-aos-delay="600">
              <i className="fab fa-node-js"></i> Node.JS
            </button>
          </div>
        </div>

        {/* Design Mastery */}
        <div
          className="expertise shadow mt-3 bgGreen"
          data-aos="fade-left"
          data-aos-delay="900"
        >
          <div className="d-flex align-items-center gap-4 mb-lg-5 mb-md-5 mb-5">
            <i className="fa fa-brush expertiseIcon"></i>
            <h5>Design Mastery</h5>
          </div>
          <div className="tools">
            <button data-aos="fade-up">
              <i className="fas fa-bezier-curve"></i> CorelDraw
            </button>
            <button data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-palette"></i> Canva
            </button>
            <button data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-pen-nib"></i> Photoshop
            </button>
            <button data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-draw-polygon"></i> PixelLab
            </button>
            <button data-aos="fade-up" data-aos-delay="800">
              Figma <i className="fab fa-figma"></i>
            </button>
          </div>
        </div>

        {/* Tools */}
        <div
          className="expertise shadow mt-3 bgGrey"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          <div className="d-flex align-items-center gap-4 mb-lg-5 mb-md-5 mb-5">
            <i className="fas fa-tools"></i>
            <h5>Tools</h5>
          </div>
          <div className="tools">
            <button data-aos="fade-up">
              <i className="fab fa-git-alt"></i> Git
            </button>
            <button data-aos="fade-up" data-aos-delay="200">
              <i className="fab fa-github"></i> GitHub
            </button>
            <button data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-paper-plane"></i> Postman
            </button>
            <button data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-laptop-code"></i> VS Code
            </button>
            <button data-aos="fade-up" data-aos-delay="800">
              <i className="fas fa-globe"></i> Deployment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
