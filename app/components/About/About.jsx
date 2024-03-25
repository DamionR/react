// src/pages/AboutPage.jsx
import React from 'react';
import ProfessionalSummary from '../components/About/ProfessionalSummary';
import TechnicalProficiency from '../components/About/TechnicalProficiency';
import PersonalityInsights from '../components/About/PersonalityInsights';
// Import other components as needed

export default function AboutPage() {
  return (
    <>
      <ProfessionalSummary />
      <TechnicalProficiency />
      <PersonalityInsights />
      {/* Insert other about page components here */}
    </>
  );
}
