function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <img src={project.imageUrl} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <a href={`/portfolio/${project.id}`}>Read More</a>
      </div>
    );
  }
  
  export default ProjectCard;
  