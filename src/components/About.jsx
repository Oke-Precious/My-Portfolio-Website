import React from 'react';

export default function About() {
  return (
    <section id="about" className="sec2 d-flex justify-content-between">
      <div className="subsec2" data-aos="fade-right">
        <h3 className="secTitle">
          The Digital
          <br />
          Curator
        </h3>
        <div className="buttomLine mb-5"></div>
      </div>

      <div className="subsec2">
        <p className="specialize" data-aos="fade-left" data-aos-delay="200">
          I specialize in building robust, scalable web applications that don't just function,
          they inspire. My journey began in the world of print and branding, giving me a unique
          perspective on user interface hierarchy and visual balance.
        </p>
        <p className="description my-4" data-aos="fade-left" data-aos-delay="300">
          As a Full Stack Developer, I treat my code like a design composition: clean,
          efficient, and intentional. From architecting complex backend systems to fine-tuning
          the kerning of a hero headline, I ensure every pixel and every line of code serves a
          purpose.
        </p>
        <div className="d-flex mt-5">
          <a
            href="https://github.com/Oke-Precious"
            className="projectNum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 data-aos="fade-up" data-aos-delay="300">
              10+
            </h4>
            <p data-aos="fade-up" data-aos-delay="500">
              PROJECTS COMPLETED
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
