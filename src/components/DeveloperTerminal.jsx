import React, { useState, useRef, useEffect } from 'react';
import GlassCard from './GlassCard';
import { personalInfo, projects, skillCategories, currentlyBuilding } from '../data/portfolioData';

const COMMANDS = [
  { name: 'help', desc: 'Display available terminal commands' },
  { name: 'about', desc: 'Summary of background, education & engineering focus' },
  { name: 'skills', desc: 'List verified technical stack and competencies' },
  { name: 'projects', desc: 'List engineering projects and case studies' },
  { name: 'github', desc: 'View GitHub profile and repository status' },
  { name: 'contact', desc: 'View verified direct contact methods' },
  { name: 'resume', desc: 'Download official CV / resume PDF' },
  { name: 'status', desc: 'Show current focus & active development work' },
  { name: 'clear', desc: 'Clear terminal output history' },
  { name: 'mode recruiter', desc: 'Switch interface to Recruiter View' },
  { name: 'mode developer', desc: 'Switch interface to Developer View' },
  { name: 'mode normal', desc: 'Switch interface to Standard View' },
];

export default function DeveloperTerminal({ onModeChange, onOpenResume, onDownloadCV }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'Oke Precious Abioye · Interactive Developer Terminal v2.4 (LAUTECH Node)\nType "help" to view available commands, or click the quick pills below.',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    setCommandHistory((prev) => [...prev, cmdRaw]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'user', text: cmdRaw }];

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `AVAILABLE COMMANDS:\n${COMMANDS.map((c) => `  ${c.name.padEnd(16)} - ${c.desc}`).join('\n')}\n\nTip: You can also try "sudo hire-precious" 😉`,
      });
    } else if (cmd === 'about') {
      newHistory.push({
        type: 'output',
        text: `OKE PRECIOUS ABIOYE
Title: ${personalInfo.title}
Education: ${personalInfo.education.degree} @ ${personalInfo.education.institution}
Location: ${personalInfo.location} (${personalInfo.timezone})
Core Focus: Full-Stack Web Development, MERN Stack, RESTful APIs, and Figma-to-Code Implementation.
Note: I collaborate with UI/UX designers to translate design files into pixel-perfect, accessible code.`,
      });
    } else if (cmd === 'skills') {
      const skillsFormatted = skillCategories
        .map(
          (cat) =>
            `[${cat.title.toUpperCase()}]\n  ${cat.skills.map((s) => `${s.name} (${s.level})`).join(', ')}`
        )
        .join('\n\n');
      newHistory.push({
        type: 'output',
        text: `TECHNICAL COMPETENCIES:\n\n${skillsFormatted}`,
      });
    } else if (cmd === 'projects') {
      const projectList = projects
        .map(
          (p) =>
            `• ${p.title} [${p.category} | ${p.status || 'Active'}]\n  ${p.tagline}\n  Stack: ${p.technologies.join(', ')}${p.liveUrl ? `\n  Live: ${p.liveUrl}` : ''}\n  Repo: ${p.githubUrl}`
        )
        .join('\n\n');
      newHistory.push({
        type: 'output',
        text: `FEATURED ENGINEERING PROJECTS:\n\n${projectList}`,
      });
    } else if (cmd === 'github') {
      newHistory.push({
        type: 'output',
        text: `GITHUB STATUS:\nHandle: @${personalInfo.githubUsername}\nProfile: ${personalInfo.githubUrl}\nRepositories: Gavel-Case-Tracker, Projexa, Special-Bank-Web-App, Special-Hotel, Atmos Weather\nPublic repos are automatically synced on the portfolio.`,
      });
    } else if (cmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: `DIRECT CONTACT METHODS:\nEmail: ${personalInfo.email}\nPhone: ${personalInfo.phone}\nWhatsApp: ${personalInfo.whatsappUrl}\nLinkedIn: ${personalInfo.linkedinUrl}\nLocation: ${personalInfo.location}`,
      });
    } else if (cmd === 'resume' || cmd === 'cv') {
      if (onDownloadCV) onDownloadCV();
      newHistory.push({
        type: 'output',
        text: `Initiated resume download: Oke_Precious_Abioye_CV.pdf\nYou can also click the CV button in the header or use the Command Palette (Ctrl+K).`,
      });
    } else if (cmd === 'status') {
      newHistory.push({
        type: 'output',
        text: `CURRENT STATUS & FOCUS:
Status: ${personalInfo.status}
Currently Building: ${currentlyBuilding.project} (${currentlyBuilding.status})
Summary: ${currentlyBuilding.shortDescription}
Stack: ${currentlyBuilding.technologies.join(', ')}`,
      });
    } else if (cmd === 'mode recruiter') {
      if (onModeChange) onModeChange('recruiter');
      newHistory.push({
        type: 'output',
        text: `Switched to RECRUITER VIEW. Highlighting executive summary, core stack, and featured projects.`,
      });
    } else if (cmd === 'mode developer') {
      if (onModeChange) onModeChange('developer');
      newHistory.push({
        type: 'output',
        text: `Switched to DEVELOPER VIEW. Revealed architecture diagrams, code excerpts, and technical decisions.`,
      });
    } else if (cmd === 'mode normal') {
      if (onModeChange) onModeChange('normal');
      newHistory.push({
        type: 'output',
        text: `Switched to STANDARD VIEW.`,
      });
    } else if (cmd === 'sudo hire-precious' || cmd === 'hire') {
      newHistory.push({
        type: 'output',
        text: `[AUTH GRANTED: ROOT ACCESS]
Congratulations! You unlocked the hiring protocol.
Oke Precious is ready to bring high energy, disciplined work ethic, and MERN stack competence to your team.
Send an email to: ${personalInfo.email} or call ${personalInfo.phone}. Let's build something exceptional!`,
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `command not found: "${cmdRaw}". Type "help" to see available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        }
      }
    }
  };

  return (
    <section id="terminal" className="section-wrapper" style={{ paddingTop: '20px' }}>
      <div className="section-kicker" data-aos="fade-right">
        Developer Shell
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
        <div>
          <h2 className="section-title" data-aos="fade-right" data-aos-delay="100" style={{ margin: 0 }}>
            Interactive Developer Terminal
          </h2>
          <p className="section-subtitle" data-aos="fade-right" data-aos-delay="200" style={{ margin: '8px 0 0' }}>
            Query system stats, inspect real project architectures, or run custom commands.
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }} data-aos="fade-left">
          {['help', 'about', 'skills', 'projects', 'status', 'resume'].map((quickCmd) => (
            <button
              key={quickCmd}
              onClick={() => executeCommand(quickCmd)}
              style={{
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                color: 'var(--cyan-primary)',
                fontFamily: 'monospace',
                fontSize: '11.5px',
                padding: '4px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 254, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 242, 254, 0.08)';
              }}
            >
              {quickCmd}
            </button>
          ))}
        </div>
      </div>

      <GlassCard
        data-aos="fade-up"
        enableTilt={false}
        style={{
          padding: '0',
          overflow: 'hidden',
          borderRadius: '16px',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          background: 'rgba(6, 10, 22, 0.95)',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            background: 'rgba(10, 16, 32, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'monospace', letterSpacing: '0.5px' }}>
            oke-precious@lautech: ~/portfolio (zsh)
          </span>
          <span style={{ fontSize: '11px', color: 'var(--cyan-muted)', fontFamily: 'monospace' }}>
            UTF-8 · Interactive
          </span>
        </div>

        {/* Terminal Body */}
        <div
          style={{
            padding: '20px 24px',
            minHeight: '280px',
            maxHeight: '420px',
            overflowY: 'auto',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '13px',
            lineHeight: 1.7,
            color: '#E2E8F0',
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '10px', whiteSpace: 'pre-wrap' }}>
              {item.type === 'user' ? (
                <div>
                  <span style={{ color: 'var(--cyan-primary)' }}>oke-precious@lautech</span>
                  <span style={{ color: 'var(--text-dim)' }}>:</span>
                  <span style={{ color: 'var(--indigo-primary)' }}>~/portfolio</span>
                  <span style={{ color: '#fff' }}>$ </span>
                  <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.text}</span>
                </div>
              ) : item.type === 'error' ? (
                <div style={{ color: '#F87171' }}>{item.text}</div>
              ) : item.type === 'system' ? (
                <div style={{ color: 'var(--cyan-muted)', opacity: 0.9 }}>{item.text}</div>
              ) : (
                <div style={{ color: '#CBD5E1', paddingLeft: '8px', borderLeft: '2px solid rgba(0, 242, 254, 0.3)' }}>
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ color: 'var(--cyan-primary)' }}>oke-precious@lautech</span>
            <span style={{ color: 'var(--text-dim)' }}>:</span>
            <span style={{ color: 'var(--indigo-primary)' }}>~/portfolio</span>
            <span style={{ color: '#fff' }}>$ </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal input command"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: '13px',
                padding: 0,
              }}
              autoFocus={false}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </GlassCard>
    </section>
  );
}
