import React, { useEffect, useState, useRef } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
  });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            const targets = { projects: 10, clients: 8, experience: 2 };
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);

              setCounts({
                projects: Math.floor(progress * targets.projects),
                clients: Math.floor(progress * targets.clients),
                experience: Math.floor(progress * targets.experience),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(targets);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statsSection" ref={sectionRef}>
      <div className="statsContainer">
        <div className="statItem" data-aos="fade-up">
          <div className="statNumber" data-count="10">
            {counts.projects}+
          </div>
          <div className="statLabel">Projects Completed</div>
        </div>

        <div className="statItem" data-aos="fade-up" data-aos-delay="200">
          <div className="statNumber" data-count="8">
            {counts.clients}+
          </div>
          <div className="statLabel">Happy Clients</div>
        </div>

        <div className="statItem" data-aos="fade-up" data-aos-delay="400">
          <div className="statNumber" data-count="2">
            {counts.experience}+
          </div>
          <div className="statLabel">Years Experience</div>
        </div>
      </div>
    </section>
  );
}
