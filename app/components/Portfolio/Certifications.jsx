import React from 'react';

const certifications = [
  {
    name: 'IT Support Professional',
    issuer: 'Google',
    issued: 'Feb 2022',
    url: '//credential link (if available)',
    logo: '// Path to Google logo image', // Replace with your logo path
  },
  {
    name: 'Digital Marketing & Ecommerce',
    issuer: 'Google',
    issued: 'Feb 2023',
    url: '// Credential link (if available)',
    logo: '// Path to Google logo image', // Replace with your logo path
  },
  {
    name: 'Fundamentals of Predictive Project Management',
    issuer: 'Project Management Institute',
    issued: 'Feb 2023',
    url: '// Credential link (if available)',
    logo: '// Path to PMI logo image', // Replace with your logo path
  },
  {
    name: 'Certified Customer Success Manager (CCSM) Level 1',
    issuer: 'SuccessHACKER',
    issued: 'Jun 2023',
    url: '// Credential link (if available)',
    logo: '// Path to SuccessHACKER logo image', // Replace with your logo path
  },
  {
    name: 'SQL',
    issuer: 'Codecademy',
    issued: 'Jun 2023',
    url: '// Credential link (if available)',
    logo: '// Path to Codecademy logo image', // Replace with your logo path
  },
  {
    name: 'AI-Powered Performance Ads Certification',
    issuer: 'Google Digital Academy (Skillshop)',
    issued: 'Credential ID: 200973290',
    url: '// Credential link (if available)',
    logo: '// Path to Google Skillshop logo image', // Replace with your logo path
  },
  {
    name: 'Value Realization Best Practices for Customer Success Management',
    issuer: 'LinkedIn',
    issued: 'Jan 2024',
    url: '// Credential link (if available)',
    logo: '// Path to LinkedIn logo image', // Replace with your logo path
  },
  {
    name: 'Onboarding and Adoption Best Practices for Customer Success Management',
    issuer: 'LinkedIn',
    issued: 'Feb 2024',
    url: '// Credential link (if available)',
    logo: '// Path to LinkedIn logo image', // Replace with your logo path
  },
  {
    name: 'Liquid Storefronts for Theme Developers',
    issuer: 'Shopify',
    issued: 'Mar 2024 – Expires Mar 2026',
    url: '// Credential link (if available)',
    logo: '// Path to Shopify logo image', // Replace with your logo path
  },
  {
    name: 'Introduction to Front-End Development',
    issuer: 'Meta',
    issued: 'Mar 2024',
    url: '// Credential link (if available)',
    logo: '// Path to Meta logo image', // Replace with your logo path
  },
];

function Certifications() {
  return (
    <section className="certifications bg-gray-100 py-8 px-4 rounded shadow-md">
      <h2>Certifications</h2>
      <ul className="certification-list list-none grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((certification) => (
          <li key={certification.name} className="certification-item bg-white p-4 rounded shadow-md hover:shadow-lg">
            <div className="flex items-center mb-2">
              {certification.logo && (
                <img src={certification.logo} alt={certification.issuer} className="certification-logo mr-2 w-8 h-8" />
              )}
              <h4 className="text-primary font-bold">{certification.name}</h4>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              {certification.issuer} - {certification.issued}
            </p>
            {certification.url && (
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link inline-block mt-
