import React from 'react';

export default function Projects() {
  const handleMouseMove = (e) => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="projects" className="sec4">
      <header className="secHeader" data-aos="fade-right">
        PORTFOLIO
      </header>
      <div className="d-lg-flex justify-content-between align-items-center">
        <h3 className="secTitle" data-aos="fade-up">
          Selected Works
        </h3>
        <p data-aos="zoom-in" data-aos-delay="200">
          A showcase of technical complexity and visual refinement.
        </p>
      </div>

      <div className="mainProjectContainer">
        {/* Project 1 */}
        <div
          className="projectCon1 projectCon"
          data-aos="fade-up"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="projectImgCon">
            <img
              src="/media/preciousbank.png"
              alt="Precious Bank Web App"
              loading="lazy"
              width="600"
              height="400"
            />
            <div className="techBadges">
              <span className="techBadge">HTML</span>
              <span className="techBadge">CSS</span>
              <span className="techBadge">JavaScript</span>
            </div>
          </div>
          <div className="p-4">
            <header className="secHeader" data-aos="fade-right" data-aos-delay="200">
              <i className="fa fab fa-html5 text-danger"></i> +{' '}
              <i className="fab fab fa-css3 text-primary"></i> +{' '}
              <i className="fab fab fa-js text-light"></i>
            </header>
            <h4 data-aos="fade-right" data-aos-delay="400">
              Precious Bank Web App
            </h4>
            <article className="mb-3" data-aos="fade-right" data-aos-delay="600">
              A clean and modern <b>banking web app UI</b> that showcases user-friendly
              account creation and digital banking interface design.
            </article>
            <div className="d-flex justify-content-between align-items-start">
              <a
                href="https://specialbank.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="viewProject"
                data-aos-delay="900"
                data-aos="fade-up"
              >
                <span>View project</span>
                <i className="fa fa-arrow-right"></i>
              </a>
              <div className="text-center">
                <a
                  href="https://github.com/Oke-Precious/Special-Bank-Web-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewGit"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <i className="fab fa-github"></i>
                  <span>View code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="projectCon projectCon2"
          data-aos="fade-up"
          data-aos-delay="200"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="projectImgCon">
            <img src="/media/beanscene.png" alt="Special Bean Scene" />
            <div className="techBadges">
              <span className="techBadge">HTML</span>
              <span className="techBadge">CSS</span>
            </div>
          </div>
          <div className="p-4">
            <header className="secHeader" data-aos="fade-right" data-aos-delay="200">
              <i className="fa fab fa-html5 text-danger"></i> +{' '}
              <i className="fab fab fa-css3 text-primary"></i>
            </header>
            <h4 data-aos="fade-right" data-aos-delay="400">
              Special Bean Scene
            </h4>
            <article className="mb-4" data-aos="fade-right" data-aos-delay="600">
              Special Bean Scene is a modern coffee website with a clean design, smooth
              navigation, and a premium café feel.
            </article>
            <div className="d-flex justify-content-between align-items-start">
              <a
                href="https://specialbeanscene.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="viewProject"
                data-aos-delay="900"
                data-aos="fade-up"
              >
                <span>View project</span>
                <i className="fa fa-arrow-right"></i>
              </a>
              <div className="text-center">
                <a
                  href="https://github.com/Oke-Precious/SPECIAL-BEAN-SCENE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewGit"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <i className="fab fa-github"></i>
                  <span>View code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="projectCon projectCon2"
          data-aos="fade-up"
          data-aos-delay="300"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="projectImgCon">
            <img src="/media/specialhotel.png" alt="Special Hotel Website" />
            <div className="techBadges">
              <span className="techBadge">HTML</span>
              <span className="techBadge">CSS</span>
            </div>
          </div>
          <div className="p-4">
            <header className="secHeader" data-aos="fade-right" data-aos-delay="200">
              <i className="fa fab fa-html5 text-danger"></i> +{' '}
              <i className="fab fab fa-css3 text-primary"></i>
            </header>
            <h4 data-aos="fade-right" data-aos-delay="400">
              Special Hotel Website
            </h4>
            <article className="mb-4" data-aos="fade-right" data-aos-delay="600">
              A modern and responsive hotel website UI design that delivers a clean booking
              experience with elegant layouts, smooth navigation, and a premium
              hospitality feel.
            </article>
            <div className="d-flex justify-content-between align-items-start">
              <a
                href="https://specialhotel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="viewProject"
                data-aos-delay="900"
                data-aos="fade-up"
              >
                <span>View project</span>
                <i className="fa fa-arrow-right"></i>
              </a>
              <div className="text-center">
                <a
                  href="https://github.com/Oke-Precious/Special-Hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewGit"
                  data-aos="fade-up"
                  data-aos-delay="1200"
                >
                  <i className="fab fa-github"></i>
                  <span>View code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* See More */}
        <div
          className="projectCon1 projectCon seeMoreCon d-flex align-items-center"
          data-aos="zoom-in"
          data-aos-delay="400"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="seeMore">
            <h5 className="">Want to see more of my creative journey?</h5>
            <p className="my-4">
              I've worked with startups and established brands across the globe. <br /> Let's
              build your next big idea together.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="dribble">Dribble</button>
              </a>

              <a
                href="https://github.com/Oke-Precious"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="github">
                  <i className="fab fa-github"></i> GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
