import React, { useEffect } from 'react';
import HeaderSection from './components/HeaderSection';
import './styles/Landline.css';

function LandlinePage() {
  useEffect(() => {
    const scaleIframe = () => {
      const iframe = document.querySelector('.landline-frame');
      const container = document.querySelector('.landline-container');

      const containerWidth = container.offsetWidth;

      const originalWidth = 800;
      const originalHeight = 200;

      const scaleFactor = Math.max(containerWidth / originalWidth, 0.5);

      const newHeight = originalHeight * scaleFactor;

      iframe.style.transform = `scale(${scaleFactor})`;
      container.style.height = `${newHeight}px`;
      iframe.style.width = `${originalWidth}px`;
      iframe.style.height = `${originalHeight}px`;
    };

    window.addEventListener('resize', scaleIframe);
    window.addEventListener('load', scaleIframe);

    return () => {
      window.removeEventListener('resize', scaleIframe);
      window.removeEventListener('load', scaleIframe);
    };
  }, []);

  return (
    <div className="landline-page">
      <HeaderSection />
      <div className="landline-container">
        <h2 className="landline-title">Landline Simulation</h2>
        <iframe 
          className="landline-frame"
          src="https://tinyurl.com/2f6c66hq" 
          title="landline"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default LandlinePage;