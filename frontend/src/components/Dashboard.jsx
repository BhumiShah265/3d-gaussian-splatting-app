import React, { useState, useEffect } from 'react';
import { Play, CheckCircle, AlertTriangle, Cpu } from 'lucide-react';
import Viewer3D from './Viewer3D';

export default function Dashboard({ jobId, onReset }) {
  const [jobInfo, setJobInfo] = useState({
    status: 'queued',
    progress: 0
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) return;

    // Check status immediately
    fetchStatus();

    // Set up a polling loop (polls every 1 second)
    const intervalId = setInterval(() => {
      fetchStatus();
    }, 1000);

    async function fetchStatus() {
      try {
        const response = await fetch(`/api/status/${jobId}`);
        if (!response.ok) {
          throw new Error("Job not found or server error");
        }
        const data = await response.json();
        
        setJobInfo({
          status: data.status,
          progress: data.progress
        });

        // Stop polling if the job is finished
        if (data.status === 'completed' || data.status === 'failed') {
          clearInterval(intervalId);
        }
      } catch (err) {
        console.error("Error polling job status:", err);
        setError("Could not retrieve status from the server.");
        clearInterval(intervalId);
      }
    }

    // Clean up interval when component is destroyed
    return () => clearInterval(intervalId);
  }, [jobId]);

  // Determine stage visual status
  const getStageClass = (stageName) => {
    const current = jobInfo.status;
    const stages = ['queued', 'extracting_frames', 'running_sfm', 'training', 'completed'];
    const currentIndex = stages.indexOf(current);
    const stageIndex = stages.indexOf(stageName);

    if (current === 'failed') return 'pending';
    if (current === 'completed') return 'completed';
    if (currentIndex === stageIndex) return 'active';
    if (currentIndex > stageIndex) return 'completed';
    return 'pending';
  };

  return (
    <div className="dashboard-grid">
      {/* Sidebar Progress Tracker */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="status-tracker">
          <div className="progress-header">
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {jobInfo.status === 'completed' ? 'Processing Complete' : 'AI Reconstruction Status'}
            </span>
            <span className="progress-percentage">{jobInfo.progress}%</span>
          </div>

          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${jobInfo.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Pipeline Steps Tracker */}
        <div className="stages-list">
          <div className={`stage-item ${getStageClass('extracting_frames')}`}>
            <div className="stage-dot"></div>
            <span className="stage-label">Extracting Video Frames (OpenCV)</span>
          </div>
          <div className={`stage-item ${getStageClass('running_sfm')}`}>
            <div className="stage-dot"></div>
            <span className="stage-label">Structure from Motion (COLMAP)</span>
          </div>
          <div className={`stage-item ${getStageClass('training')}`}>
            <div className="stage-dot"></div>
            <span className="stage-label">Training Gaussian Splats (AI)</span>
          </div>
          <div className={`stage-item ${getStageClass('completed')}`}>
            <div className="stage-dot"></div>
            <span className="stage-label">Ready for Visualization</span>
          </div>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-error)' }}>
            <AlertTriangle size={18} />
            <span style={{ fontSize: '0.85rem' }}>{error}</span>
          </div>
        )}

        {jobInfo.status === 'failed' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-error)' }}>
            <AlertTriangle size={18} />
            <span style={{ fontSize: '0.85rem' }}>Processing failed. Please check backend logs.</span>
          </div>
        )}

        {jobInfo.status !== 'completed' && jobInfo.status !== 'failed' && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            background: 'rgba(138, 43, 226, 0.1)', 
            padding: '1rem', 
            borderRadius: '12px',
            border: '1px solid rgba(138, 43, 226, 0.2)' 
          }}>
            <Cpu className="spinner" style={{ animationDuration: '3s', color: 'var(--accent-purple)' }} />
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              Your video is processing in the background. Do not close this tab.
            </p>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div style={{ display: 'flex', width: '100%' }}>
        {jobInfo.status === 'completed' ? (
          <Viewer3D jobId={jobId} onReset={onReset} />
        ) : (
          <div className="card" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1.5rem',
            textAlign: 'center', 
            width: '100%',
            minHeight: '400px'
          }}>
            <div className="spinner" style={{ width: '48px', height: '48px', borderWidth: '4px' }}></div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                Orchestrating AI Pipelines...
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
                We are extracting video keyframes and preparing the camera coordinate matrix for splatting.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
