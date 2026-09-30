import React, { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="project-modal-header">
          <div className="d-flex align-items-center gap-2">
            <span className="tech-chip text-cyan">{project.category}</span>
            <span className="text-muted">·</span>
            <span className="font-mono text-xs text-muted">{project.githubRepo || 'Project Detail'}</span>
          </div>

          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close project modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Modal Hero Image */}
        {project.image && (
          <div className="project-modal-image-con">
            <img
              src={project.image}
              alt={project.title}
              className="project-modal-img"
              loading="lazy"
            />
            <div className="project-modal-img-scrim"></div>
          </div>
        )}

        {/* Modal Body */}
        <div className="project-modal-body">
          <h2 id="project-modal-title" className="project-modal-title">
            {project.title}
          </h2>
          <p className="project-modal-tagline">{project.tagline}</p>

          {/* Tags */}
          <div className="project-modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="project-modal-section">
            <h4 className="section-mini-heading">Overview</h4>
            <p className="project-modal-desc">{project.description}</p>
          </div>

          {/* Key Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="project-modal-section">
              <h4 className="section-mini-heading">Technical Highlights</h4>
              <ul className="project-modal-highlights">
                {project.highlights.map((point, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check-circle highlight-bullet"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="project-modal-footer">
          <div className="d-flex gap-2 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow"
              >
                <i className="fas fa-external-link-alt"></i> Live Application
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-outline"
              >
                <i className="fab fa-github"></i> View Source Code
              </a>
            )}
          </div>
          <button onClick={onClose} className="btn-ghost">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
