import React, { useState } from 'react';
import Uploader from './components/Uploader';
import Dashboard from './components/Dashboard';

export default function App() {
  const [activeJobId, setActiveJobId] = useState(null);

  const handleUploadSuccess = (jobId) => {
    setActiveJobId(jobId);
  };

  const handleReset = () => {
    setActiveJobId(null);
  };

  return (
    <div className="app-container">
      <header>
        <h1 className="logo-title">Gaussian Splatter 3D</h1>
        <p className="subtitle">
          Transform smartphone videos into interactive 3D WebGL scenes using AI & Computer Vision
        </p>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {!activeJobId ? (
          <Uploader onUploadSuccess={handleUploadSuccess} />
        ) : (
          <Dashboard jobId={activeJobId} onReset={handleReset} />
        )}
      </main>

      <footer style={{ 
        marginTop: '3rem', 
        textAlign: 'center', 
        fontSize: '0.8rem', 
        color: 'var(--text-secondary)',
        opacity: 0.5 
      }}>
        Powered by Three.js & FastAPI • M4 Silicon Pipeline
      </footer>
    </div>
  );
}
