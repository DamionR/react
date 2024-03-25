import React, { Suspense } from 'react';
import Header from './Header'; // Update these paths according to your actual file structure
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Use react-router's Outlet for nested routes

// Conditional page components
import Introduction from './Home/Introduction';
import SkillHighlights from './Home/SkillHighlights';
import RecentProjectsPreview from './Home/RecentProjectsPreview';
import ProfessionalSummary from './About/ProfessionalSummary';
import TechnicalProficiency from './About/TechnicalProficiency';
import PersonalityInsights from './About/PersonalityInsights';
import ProjectGallery from './Portfolio/ProjectGallery';
import ProjectCard from './Portfolio/ProjectCard';
import ResumeDownload from './Resume/ResumeDownload';
import CareerTimeline from './Resume/CareerTimeline';
import BlogListing from './Blog/BlogListing';
import ContactForm from './Contact/ContactForm';
import SocialLinks from './Contact/SocialLinks';

export function Layout({ children, page }) {
  return (
    <>
      <Header />
      <NavigationBar />
      <main className="container">
        {page === 'home' && (
          <>
            <Introduction />
            <SkillHighlights />
            <RecentProjectsPreview />
          </>
        )}
        {page === 'about' && (
          <>
            <ProfessionalSummary />
            <TechnicalProficiency />
            <PersonalityInsights />
          </>
        )}
        {page === 'portfolio' && (
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectGallery>
              {/* Assuming ProjectGallery will map over projects and render ProjectCards */}
            </ProjectGallery>
          </Suspense>
        )}
        {page === 'resume' && (
          <>
            <ResumeDownload />
            <CareerTimeline />
          </>
        )}
        {page === 'blog' && <BlogListing />}
        {page === 'contact' && (
          <>
            <ContactForm />
            <SocialLinks />
          </>
        )}

        {/* Outlet for rendering nested route components */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
