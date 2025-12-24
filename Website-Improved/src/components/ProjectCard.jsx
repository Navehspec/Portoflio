import React from 'react';

const ProjectCard = ({ project, onClick }) => {
  const cover = project.slug && Array.isArray(project.photos) && project.photos.length 
    ? `/images/projects/${project.slug}/${project.photos[0]}` 
    : (project.slug && project.image ? `/images/projects/${project.slug}/${project.image}` : project.image);

  return (
    <article className="project-card" onClick={() => onClick(project)}>
      <div className="card-img-wrap">
        <img className="card-image" src={cover} alt={project.title} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-meta">
          <h3 className="card-title">{project.title}</h3>
        </div>
        <p className="card-desc">{project.short}</p>
      </div>
    </article>
  );
};

export default ProjectCard;