import React, { useState, useRef } from 'react';
import { UploadCloud, Video, AlertCircle } from 'lucide-react';

export default function Uploader({ onUploadSuccess }) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile) => {
    setError(null);
    // Allow MP4 and MOV videos
    if (selectedFile.type.startsWith('video/') || selectedFile.name.endsWith('.mp4') || selectedFile.name.endsWith('.mov')) {
      setFile(selectedFile);
    } else {
      setError("Please upload an MP4 or MOV video file.");
      setFile(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      onUploadSuccess(data.job_id);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Failed to upload video to the server. Make sure the backend is running.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div 
        className={`dropzone ${dragActive ? 'active' : ''}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          style={{ display: 'none' }} 
          accept="video/*,.mp4,.mov"
          onChange={handleFileChange}
          disabled={uploading}
        />
        
        <div className="dropzone-icon">
          <UploadCloud size={48} />
        </div>

        {file ? (
          <div>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Selected: {file.name}
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              ({(file.size / (1024 * 1024)).toFixed(2)} MB)
            </p>
          </div>
        ) : (
          <div>
            <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>
              Drag and drop your smartphone video here
            </p>
            <p className="file-input-label" style={{ fontSize: '0.85rem', opacity: 0.8 }}>
              Supports MP4 or MOV formats
            </p>
          </div>
        )}

        {!uploading && (
          <button 
            type="button" 
            className="browse-btn" 
            onClick={handleButtonClick}
          >
            {file ? "Choose Another Video" : "Browse Video"}
          </button>
        )}
      </div>

      {error && (
        <div style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          color: 'var(--color-error)',
          fontSize: '0.9rem' 
        }}>
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {file && (
        <button 
          onClick={handleUpload}
          disabled={uploading}
          className="browse-btn"
          style={{ 
            width: '100%', 
            marginTop: '1.5rem', 
            borderRadius: '12px',
            background: uploading ? '#4a3f65' : 'linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%)',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}
        >
          {uploading ? (
            <>
              <div className="spinner"></div>
              <span>Uploading Video...</span>
            </>
          ) : (
            <>
              <Video size={18} />
              <span>Reconstruct in 3D</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
