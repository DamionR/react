import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="project-card bg-white rounded shadow-md p-4 hover:shadow-lg">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image w-full rounded mb-4"
      />
      <h3 className="project-title text-lg font-bold mb-2">{project.title}</h3>
      <p className="project-description text-gray-700 leading-relaxed mb-4">
        {project.description}
      </p>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link inline-block bg-primary text-white py-2 px-4 rounded focus:outline-none hover:bg-opacity-75"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
