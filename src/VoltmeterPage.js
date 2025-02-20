import React, { useEffect } from 'react';
import HeaderSection from './components/HeaderSection';
import './styles/Voltmeter.css';

function VoltmeterPage() {
  useEffect(() => {
    const scaleIframe = () => {
      const iframe = document.querySelector('.voltmeter-frame');
      const container = document.querySelector('.voltmeter-container');

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
    <div className="voltmeter-page">
      <HeaderSection />
      <div className="voltmeter-container">
        <h2 className="voltmeter-title">Voltmeter Simulation</h2>
        <iframe 
          className="voltmeter-frame"
          src="https://tinyurl.com/27kjsx6a" 
          title="voltmeter"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default VoltmeterPage;