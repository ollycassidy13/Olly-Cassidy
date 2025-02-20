import React from 'react';
import HomeSection from './HomeSection';
import AboutSection from './components/AboutSection';
import TimelineSection from './components/TimelineSection';
import CommitsSection from './components/CommitsSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsBento from './components/ProjectsBento';
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';

function MainPage() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <TimelineSection />
      <CommitsSection />
      <PublicationsSection />
      <ProjectsBento />
      <FooterSection />
    </>
  );
}

export default MainPage;