import React, { useState } from 'react';

export default function ArchitectureDiagram({ layers = [] }) {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);

  if (!layers || layers.length === 0) return null;
  const currentLayer = layers[activeLayerIndex] || layers[0];

  return (
    <div
      style={{
        background: 'rgba(5, 8, 18, 0.75)',
        border: '1px solid rgba(0, 242, 254, 0.2)',
        borderRadius: '16px',
        padding: '24px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--cyan-primary)',
              boxShadow: '0 0 8px var(--cyan-primary)',
            }}
          />
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-head)', letterSpacing: '0.5px' }}>
            SYSTEM ARCHITECTURE & DATA FLOW
          </span>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--cyan-muted)', fontFamily: 'monospace' }}>
          Interactive Flow · Click any node to inspect
        </span>
      </div>

      {/* Interactive Layer Pipeline */}
      <div
        className="arch-pipeline"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '12px 6px',
          position: 'relative',
        }}
      >
        {layers.map((layer, idx) => {
          const isActive = idx === activeLayerIndex;
          return (
            <React.Fragment key={idx}>
              <button
                onClick={() => setActiveLayerIndex(idx)}
                style={{
                  flex: '1 1 140px',
                  minWidth: '130px',
                  background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(15, 23, 42, 0.65)',
                  border: `1px solid ${isActive ? 'var(--cyan-primary)' : 'rgba(255, 255, 255, 0.1)'}`,
                  borderRadius: '12px',
                  padding: '14px 12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  boxShadow: isActive ? '0 0 15px rgba(0, 242, 254, 0.25)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <i
                    className={layer.icon || 'fas fa-server'}
                    style={{
                      fontSize: '14px',
                      color: isActive ? 'var(--cyan-primary)' : 'var(--text-muted)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '10.5px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      color: isActive ? 'var(--cyan-primary)' : 'var(--text-dim)',
                      fontWeight: 700,
                    }}
                  >
                    Node 0{idx + 1}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: isActive ? '#fff' : 'var(--text-head)',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {layer.layer}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: isActive ? 'var(--cyan-muted)' : 'var(--text-muted)',
                    fontFamily: 'monospace',
                  }}
                >
                  {layer.tech}
                </div>
              </button>

              {idx < layers.length - 1 && (
                <div
                  className="arch-connector"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(0, 242, 254, 0.6)',
                    fontSize: '13px',
                    padding: '0 4px',
                  }}
                >
                  <i className="fas fa-arrow-right"></i>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Layer Detail Focus Box */}
      <div
        style={{
          marginTop: '18px',
          padding: '16px 20px',
          borderRadius: '12px',
          background: 'rgba(10, 16, 32, 0.9)',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'rgba(0, 242, 254, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--cyan-primary)',
            fontSize: '16px',
            flexShrink: 0,
            marginTop: '2px',
          }}
        >
          <i className={currentLayer.icon || 'fas fa-layer-group'} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>
              {currentLayer.layer}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--cyan-primary)', fontFamily: 'monospace' }}>
              ({currentLayer.tech})
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6 }}>
            {currentLayer.details}
          </p>
        </div>
      </div>
    </div>
  );
}
