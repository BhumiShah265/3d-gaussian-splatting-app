import React, { useEffect, useRef, useState } from 'react';
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import { RefreshCw, HelpCircle } from 'lucide-react';

export default function Viewer3D({ jobId, onReset }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let viewer = null;

    if (!jobId || !containerRef.current) return;

    const initViewer = async () => {
      try {
        setLoading(true);
        setError(null);

        // Initialize the WebGL Gaussian Splats 3D Viewer
        viewer = new GaussianSplats3D.Viewer({
          'selfContained': false,
          'useBuiltInControls': true,
          'rootElement': containerRef.current,
          // Set initial camera positions looking at the center
          'cameraPosition': [0, 1.5, 4],
          'cameraLookAt': [0, 0, 0],
          'halfPrecision': true, // Helps with speed on standard screens
          'integerRedraw': false,
        });

        const splatUrl = `/api/splat/${jobId}`;

        // Add the splat scene and start the render loop once loaded
        await viewer.addSplatScene(splatUrl, {
          'streamView': true,
        });

        viewer.start();
        setLoading(false);
      } catch (err) {
        console.error("Error loading splat viewer:", err);
        setError("Error initializing 3D viewer. The file might be corrupted or server is unreachable.");
        setLoading(false);
      }
    };

    initViewer();

    // Clean up WebGL assets on component unmount (avoids GPU memory leaks)
    return () => {
      if (viewer) {
        try {
          viewer.dispose();
        } catch (e) {
          console.warn("Failed to dispose viewer:", e);
        }
      }
    };
  }, [jobId]);

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>Interactive 3D Scene</h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Job ID: {jobId}</p>
        </div>
        <button 
          onClick={onReset}
          className="browse-btn"
          style={{ 
            padding: '0.5rem 1rem', 
            fontSize: '0.8rem', 
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-glass)',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <RefreshCw size={12} />
          <span>Upload New Video</span>
        </button>
      </div>

      <div className="viewer-container" ref={containerRef}>
        {loading && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            background: '#050508',
            zIndex: 5
          }}>
            <div className="spinner" style={{ width: '40px', height: '40px' }}></div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Loading 3D Gaussian Splats...
            </p>
          </div>
        )}

        {error && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            background: '#050508',
            padding: '2rem',
            textAlign: 'center',
            zIndex: 5
          }}>
            <p style={{ color: 'var(--color-error)', fontWeight: 500 }}>{error}</p>
            <button 
              className="browse-btn" 
              onClick={onReset}
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              Go Back
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="viewer-overlay">
              <span className="viewer-badge">Active</span>
              <span className="viewer-badge" style={{ color: 'var(--accent-purple)' }}>WebGL Rendering</span>
            </div>
            
            <div className="viewer-instructions">
              🖱️ Drag: Rotate | ⚙️ Scroll: Zoom | ⌨️ Right Click + Drag: Pan
            </div>
          </>
        )}
      </div>
    </div>
  );
}
