import React, { useState } from 'react';
import { cvData } from '../data/cvData.js';
import { generateCVPdf, getGoogleDocsExportUrl } from '../utils/generateCVPdf.js';

export default function CVModal({ isOpen, onClose }) {
  const [googleDocLink, setGoogleDocLink] = useState(() => {
    return localStorage.getItem('user_google_doc_cv') || cvData.googleDocUrl || '';
  });
  const [isEditingLink, setIsEditingLink] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    if (e) e.preventDefault();
    const exportUrl = getGoogleDocsExportUrl(googleDocLink);
    if (exportUrl) {
      window.open(exportUrl, '_blank', 'noopener,noreferrer');
    } else {
      generateCVPdf();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveDocLink = (e) => {
    e.preventDefault();
    localStorage.setItem('user_google_doc_cv', googleDocLink);
    setIsEditingLink(false);
  };

  return (
    <div
      className="cv-modal-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(6px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
      }}
    >
      <div
        className="cv-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-primary)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          border: '1px solid var(--border-color)',
          overflow: 'hidden',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-file-alt" style={{ color: 'var(--text-secondary)', fontSize: '20px' }}></i>
            <h5 style={{ margin: 0, fontWeight: 600, fontSize: '18px' }}>Curriculum Vitae</h5>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleDownload}
              style={{
                backgroundColor: 'var(--text-secondary)',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <i className="fas fa-download"></i> Download PDF
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '4px 8px',
              }}
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Google Docs Sync Bar */}
        <div
          style={{
            padding: '10px 24px',
            backgroundColor: 'var(--bg-accent)',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <i className="fab fa-google-drive" style={{ color: '#0D9488' }}></i>
            <span>
              {googleDocLink ? (
                <>
                  Connected to Google Docs: <strong>Live Auto-Update Active</strong>
                </>
              ) : (
                <>Connect your Google Docs link to auto-update on every edit.</>
              )}
            </span>
          </div>

          {!isEditingLink ? (
            <button
              onClick={() => setIsEditingLink(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {googleDocLink ? 'Edit Link' : '+ Add Google Doc URL'}
            </button>
          ) : (
            <form onSubmit={handleSaveDocLink} style={{ display: 'flex', gap: '6px', width: '100%', maxWidth: '450px' }}>
              <input
                type="url"
                value={googleDocLink}
                onChange={(e) => setGoogleDocLink(e.target.value)}
                placeholder="https://docs.google.com/document/d/.../edit"
                style={{
                  flex: 1,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  fontSize: '12px',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--bg-button)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditingLink(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* Modal Body - CV Preview */}
        <div
          style={{
            padding: '28px 36px',
            overflowY: 'auto',
            flex: 1,
            lineHeight: 1.6,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'left', borderBottom: '2px solid var(--border-color)', paddingBottom: '16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', letterSpacing: '0.5px' }}>
              {cvData.name.toUpperCase()}
            </h2>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', margin: '0 0 8px' }}>
              {cvData.title}
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>
              {cvData.location} &nbsp;|&nbsp;{' '}
              <a href={`mailto:${cvData.email}`} style={{ color: 'inherit' }}>
                {cvData.email}
              </a>{' '}
              &nbsp;|&nbsp; {cvData.phone} &nbsp;|&nbsp;{' '}
              <a href={cvData.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                {cvData.githubHandle}
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div style={{ marginTop: '20px' }}>
            <h5
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              Professional Summary
            </h5>
            <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', margin: 0, textAlign: 'justify' }}>
              {cvData.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginTop: '20px' }}>
            <h5
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              Technical Skills
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
              {cvData.technicalSkills.map((item, idx) => (
                <div key={idx}>
                  <strong style={{ color: 'var(--text-primary)' }}>{item.category}:</strong>{' '}
                  <span style={{ color: 'var(--text-muted)' }}>{item.skills}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Technical Projects */}
          <div style={{ marginTop: '20px' }}>
            <h5
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '4px',
                marginBottom: '10px',
              }}
            >
              Selected Technical Projects
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cvData.projects.map((proj, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{proj.title}</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>| {proj.stack}</span>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '12px', color: 'var(--text-secondary)', marginLeft: 'auto' }}
                      >
                        <i className="fas fa-external-link-alt"></i> View
                      </a>
                    )}
                  </div>
                  <ul style={{ margin: '6px 0 0', paddingLeft: '18px', fontSize: '13px', color: 'var(--text-primary)' }}>
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ marginBottom: '4px' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginTop: '20px' }}>
            <h5
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '4px',
                marginBottom: '8px',
              }}
            >
              Education
            </h5>
            <div style={{ fontSize: '13px' }}>
              <strong style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{cvData.education.institution}</strong>
              <div style={{ color: 'var(--text-muted)', margin: '2px 0' }}>
                {cvData.education.degree} &nbsp;|&nbsp; {cvData.education.status}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '12.5px' }}>
                <strong>Relevant coursework:</strong> {cvData.education.coursework}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          style={{
            padding: '14px 24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <button
            onClick={handlePrint}
            style={{
              background: 'none',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <i className="fas fa-print"></i> Print CV
          </button>

          <button
            onClick={handleDownload}
            style={{
              backgroundColor: 'var(--bg-button)',
              color: 'var(--text-light)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 20px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <i className="fas fa-download"></i> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
