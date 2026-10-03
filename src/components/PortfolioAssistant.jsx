import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, projects, skillCategories, currentlyBuilding } from '../data/portfolioData';

export default function PortfolioAssistant({ onSelectProject, onDownloadCV }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: `Hello! I'm Oke Precious's AI Portfolio Assistant. I can answer questions about his software engineering skills, MERN stack projects, LAUTECH education, or direct contact details. Ask me anything below!`,
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const QUICK_QUESTIONS = [
    'What is his core tech stack?',
    'Tell me about the Gavel project',
    'Is he a UI/UX designer?',
    'What is his education & location?',
    'How can I contact or hire him?',
  ];

  // Verified Knowledge-Based Question Handler
  const generateVerifiedResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('stack') || q.includes('skill') || q.includes('technolog') || q.includes('language')) {
      return `Oke Precious specializes in Full-Stack Web Development with the MERN stack (MongoDB, Express.js, React, Node.js), modern JavaScript, and Tailwind/Bootstrap. For databases, he uses MongoDB & Mongoose as well as relational SQL (sql.js). He is also proficient in Figma-to-code implementation, Git, and RESTful API engineering.`;
    }

    if (q.includes('gavel')) {
      return `Gavel Case Tracker is Oke's featured full-stack legal case and workflow tracking application. Built with React, Node.js, Express, and MongoDB, it features role-based access control (RBAC), JWT token refresh handling, multi-condition case filtering, and automated CSV/PDF report exports for legal practice audits.`;
    }

    if (q.includes('ui/ux') || q.includes('designer') || q.includes('design')) {
      return `Important distinction: Oke Precious is a Full-Stack Software Engineer and Frontend Specialist—he is NOT a UI/UX designer who designs from scratch. Instead, he collaborates seamlessly with UI/UX designers, translating provided Figma or Adobe XD wireframes into pixel-perfect, accessible, and high-performance React code.`;
    }

    if (q.includes('projexa')) {
      return `Projexa is an agile project and task management dashboard built with Node.js, JavaScript, and an in-browser relational SQLite engine via sql.js. It features editable task state flags, priority tags, and JWT-authenticated sessions.`;
    }

    if (q.includes('bank') || q.includes('precious bank')) {
      return `Precious Bank is a fintech banking simulation featuring balance ledger calculations, mock fund transfers with validation, and printable digital transaction receipts powered by client-side LocalStorage.`;
    }

    if (q.includes('education') || q.includes('university') || q.includes('school') || q.includes('lautech') || q.includes('degree')) {
      return `Oke Precious is currently pursuing a B.Tech in Computer Science at Ladoke Akintola University of Technology (LAUTECH) in Ogbomoso, Oyo State, Nigeria. His coursework covers Data Structures & Algorithms, Database Management Systems, Systems Analysis & Design, and Software Engineering.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('phone') || q.includes('reach')) {
      return `You can reach Oke Precious directly via:
• Email: ${personalInfo.email}
• Phone: ${personalInfo.phone}
• WhatsApp: wa.me/+2348101238416
• Location: ${personalInfo.location} (${personalInfo.timezone})
He is currently available for full-stack engineering roles, frontend projects, and internship opportunities.`;
    }

    if (q.includes('resume') || q.includes('cv')) {
      return `Oke's official CV is available for instant download in PDF format on this website. It details his education at LAUTECH, technical competencies, and full-stack engineering projects. You can click the "CV" button in the navigation or use the command palette (Ctrl+K).`;
    }

    if (q.includes('client') || q.includes('experience') || q.includes('work')) {
      return `Oke Precious has built multiple production and prototype full-stack applications (including Gavel Case Tracker and Precious Bank) and has focused on independent engineering, software projects, and internship work. Note that he only takes on verified projects and does not claim fake client counts.`;
    }

    if (q.includes('building') || q.includes('current')) {
      return `Oke is currently actively developing: "${currentlyBuilding.project}". ${currentlyBuilding.shortDescription}`;
    }

    // Default strict fallback (never hallucinate)
    return `I only answer questions based on Oke Precious's verified portfolio and resume data. I do not have verified information on that specific topic in his portfolio data. For specific inquiries, feel free to contact him directly at ${personalInfo.email}.`;
  };

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // First attempt to query safe server endpoint if available, else use verified engine
    setTimeout(() => {
      const reply = generateVerifiedResponse(text);
      setMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button - Responsive Circular Bot FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Portfolio Assistant" : "Open AI Portfolio Assistant"}
        title={isOpen ? "Close AI Assistant" : "AI Portfolio Assistant (Ask About Me)"}
        className="glass-card ai-assistant-fab"
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          zIndex: 9990,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          padding: 0,
          border: '1px solid rgba(0, 242, 254, 0.45)',
          background: 'linear-gradient(135deg, rgba(13, 20, 38, 0.95) 0%, rgba(9, 14, 28, 0.95) 100%)',
          boxShadow: '0 8px 24px -4px rgba(0, 242, 254, 0.35), var(--glass-inner-highlight)',
          color: '#fff',
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.borderColor = 'var(--cyan-primary)';
          e.currentTarget.style.boxShadow = '0 12px 30px -4px rgba(0, 242, 254, 0.5), var(--glass-inner-highlight)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.45)';
          e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0, 242, 254, 0.35), var(--glass-inner-highlight)';
        }}
      >
        <span
          className="ai-fab-status-dot"
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#10B981',
            boxShadow: '0 0 8px #10B981',
            display: 'inline-block',
          }}
        />
        <i
          className={isOpen ? "fas fa-xmark" : "fas fa-robot"}
          style={{
            color: 'var(--cyan-primary)',
            fontSize: isOpen ? '18px' : '21px',
            transition: 'transform 0.2s ease',
          }}
        />
      </button>

      {/* Slide-Up Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="AI Portfolio Assistant Chat"
          className="glass-card ai-assistant-panel"
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '22px',
            width: 'calc(100vw - 44px)',
            maxWidth: '380px',
            height: '520px',
            maxHeight: 'calc(100vh - 110px)',
            zIndex: 9991,
            borderRadius: '20px',
            border: '1px solid rgba(0, 242, 254, 0.35)',
            background: 'linear-gradient(135deg, rgba(10, 16, 32, 0.98) 0%, rgba(6, 10, 22, 0.98) 100%)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(13, 20, 38, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-primary)',
                  fontSize: '14px',
                }}
              >
                <i className="fas fa-brain" />
              </div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-head)' }}>
                  Portfolio AI Assistant
                </div>
                <div style={{ fontSize: '11px', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  Grounded in Verified Portfolio Data
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Assistant"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '15px',
                padding: '4px',
              }}
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user';
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius: isUser ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    background: isUser ? 'linear-gradient(135deg, #00F2FE 0%, #6366F1 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isUser ? 'transparent' : 'rgba(255, 255, 255, 0.08)'}`,
                    color: isUser ? '#040814' : '#E2E8F0',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    fontWeight: isUser ? 600 : 400,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {m.text}
                </div>
              );
            })}

            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--cyan-primary)',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>Synthesizing verified response</span>
                <span className="dot-flashing" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Strip */}
          <div
            style={{
              padding: '8px 12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {QUICK_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                style={{
                  background: 'rgba(0, 242, 254, 0.08)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  color: 'var(--cyan-muted)',
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(9, 14, 28, 0.95)',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              type="text"
              placeholder="Ask a question about Oke..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                background: 'var(--cyan-primary)',
                border: 'none',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                color: '#040814',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                flexShrink: 0,
              }}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
