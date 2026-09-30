import React, { useEffect, useState, useRef } from 'react';

const PHRASES = ['Full Stack Developer', 'Graphics Designer', 'Freelancer'];

export default function Hero({ onDownloadCV, onOpenCVModal }) {
  const [typedText, setTypedText] = useState('');
  const cursorElementsRef = useRef([]);

  // Typing animation effect
  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentPhrase = PHRASES[phraseIndex];

      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % PHRASES.length;
        typeSpeed = 200;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Cursor following animation effect
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    const cursorElements = document.querySelectorAll('.cursor-star, .code-symbol');
    if (!cursorElements.length) return;

    const positions = Array(cursorElements.length)
      .fill(null)
      .map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      positions[0].x = e.clientX;
      positions[0].y = e.clientY;

      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.1;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.1;
      }

      cursorElements.forEach((el, i) => {
        el.style.left = positions[i].x - 6 + 'px';
        el.style.top = positions[i].y - 7 + 'px';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="sec1" id="hero">
      <div className="bgStars" id="stars"></div>
      <div className="bgStars" id="stars2"></div>
      <div className="bgStars" id="stars3"></div>

      <div className="cursor-star" id="star-0"></div>
      <div className="cursor-star" id="star-1"></div>
      <div className="cursor-star" id="star-2"></div>
      <div className="code-symbol" id="code-3"></div>
      <div className="cursor-star" id="star-3"></div>
      <div className="cursor-star" id="star-4"></div>
      <div className="code-symbol" id="code-4"></div>
      <div className="cursor-star" id="star-5"></div>
      <div className="cursor-star" id="star-6"></div>
      <div className="code-symbol" id="code-0"></div>
      <div className="code-symbol" id="code-1"></div>
      <div className="code-symbol" id="code-2"></div>
      <div className="cursor-star" id="star-7"></div>
      <div className="code-symbol" id="code-5"></div>
      <div className="cursor-star" id="star-8"></div>
      <div className="code-symbol" id="code-6"></div>
      <div className="cursor-star" id="star-9"></div>

      <div className="subsec1">
        <div className="available" data-aos="fade-up">
          AVAILABLE FOR PROJECTS
        </div>
        <div className="myName">
          <h1 data-aos="zoom-in">
            <span className="fullName">Oke Precious.</span>
            <br />
            <span className="profession">
              <span id="typedText" style={{ display: 'inline-block', minHeight: '1.2em' }}>
                {typedText || '\u00A0'}
              </span>
            </span>
          </h1>
        </div>
        <p className="aboutMe" data-aos="fade-up" data-aos-delay="400">
          I design digital experiences that blend high-performance code with clean,
          polished visuals making complex ideas feel simple, engaging, and easy to
          understand.
        </p>
        <div data-aos="fade-up" data-aos-delay="600" className="sec1BtnCon d-flex gap-3 flex-wrap align-items-center">
          <button className="downloadBtn" onClick={onDownloadCV}>
            <i className="fas fa-download me-2"></i> Download CV
          </button>
          {onOpenCVModal && (
            <button
              onClick={onOpenCVModal}
              className="hireMeBtn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              title="Preview and update resume"
            >
              <i className="fas fa-eye"></i> View Resume
            </button>
          )}
          <a href="https://wa.me/+2348101238416" target="_blank" rel="noopener noreferrer">
            <button className="hireMeBtn">Hire Me</button>
          </a>
        </div>
      </div>

      <div className="subsec1">
        <div className="myProfile" data-aos="zoom-in" data-aos-delay="300">
          <div className="expYears" data-aos="zoom-in" data-aos-delay="700">
            <h3>1+ Years</h3>
            <p>Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
