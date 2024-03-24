function ProjectGallery() {
    const projects = [
      { title: 'E-commerce Site', description: 'A scalable e-commerce platform built with Hydrogen.' },
      // Add more projects here.
    ];
    
    return (
      <div>
        {projects.map(project => (
          <div key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  