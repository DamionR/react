import React from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

function ProjectGallery({ projects }) {
  return (
    <section className="project-gallery bg-gray-100 py-8 px-4">
      <h2>My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;
