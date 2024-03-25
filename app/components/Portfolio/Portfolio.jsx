// src/pages/PortfolioPage.jsx
import React from 'react';
import ProjectGallery from '../components/Portfolio/ProjectGallery';
// Assume ProjectCard is used within ProjectGallery, and CaseStudyModal is triggered from ProjectCard

export default function PortfolioPage() {
  return (
    <ProjectGallery />
    // If you have other components specific to the portfolio page, insert them here
  );
}
