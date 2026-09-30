import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { personalInfo, fallbackRepositories } from '../data/portfolioData';

export default function GitHubSection() {
  const [repos, setRepos] = useState(fallbackRepositories);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (response.ok) {
          const data = await response.json();
          if (isMounted && Array.isArray(data) && data.length > 0) {
            const mapped = data.map((r) => ({
              id: r.id,
              name: r.name,
              description: r.description || 'Public software repository on GitHub.',
              language: r.language || 'Code',
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              updatedAt: new Date(r.updated_at).toLocaleDateString(undefined, {
                month: 'short',
                year: 'numeric',
              }),
            }));
            setRepos(mapped);
            setIsLive(true);
          }
        }
      } catch (err) {
        // Graceful fallback to verified repositories
        console.warn('Using verified fallback repositories for GitHub');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchGitHubRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="section-wrapper">
      <div className="section-kicker" data-aos="fade-right">
        Open Source & Code
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        <div>
          <h2 className="section-title" data-aos="fade-right" data-aos-delay="100" style={{ margin: 0 }}>
            GitHub Activity & Repositories
          </h2>
          <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200" style={{ margin: '8px 0 0' }}>
            Direct sync with{' '}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--cyan-primary)', textDecoration: 'none', fontWeight: 600 }}
            >
              github.com/{personalInfo.githubUsername}
            </a>
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} data-aos="fade-left">
          <span
            style={{
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '9999px',
              background: isLive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${isLive ? 'rgba(16, 185, 129, 0.3)' : 'var(--glass-border)'}`,
              color: isLive ? '#10B981' : 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: isLive ? '#10B981' : 'var(--text-dim)',
              }}
            />
            {isLive ? 'Live API Sync' : 'Verified Repositories'}
          </span>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn-secondary"
            style={{ fontSize: '13px', padding: '8px 16px', borderRadius: '9999px' }}
          >
            <i className="fab fa-github"></i>
            <span>Follow on GitHub</span>
          </a>
        </div>
      </div>

      {/* Repositories Grid */}
      <div
        className="github-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}
      >
        {repos.map((repo, idx) => (
          <GlassCard
            key={repo.id}
            data-aos="fade-up"
            data-aos-delay={(idx % 3) * 100}
            enableTilt={true}
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-book-bookmark" style={{ color: 'var(--cyan-primary)', fontSize: '14px' }}></i>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--text-head)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-head)')}
                  >
                    {repo.name}
                  </a>
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-dim)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  Public
                </span>
              </div>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  minHeight: '42px',
                }}
              >
                {repo.description}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '14px',
                borderTop: '1px solid var(--glass-border)',
                fontSize: '12px',
                color: 'var(--text-dim)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-body)' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor:
                        repo.language === 'JavaScript'
                          ? '#F7DF1E'
                          : repo.language === 'HTML'
                          ? '#E34F26'
                          : repo.language === 'CSS'
                          ? '#1572B6'
                          : 'var(--cyan-primary)',
                    }}
                  />
                  {repo.language}
                </span>

                {repo.stars > 0 && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="far fa-star"></i> {repo.stars}
                  </span>
                )}

                {repo.forks > 0 && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <i className="fas fa-code-fork"></i> {repo.forks}
                  </span>
                )}
              </div>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--cyan-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontWeight: 500,
                }}
              >
                <span>Inspect</span>
                <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '10px' }}></i>
              </a>
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .github-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
