import React from 'react';
import ProjectCard from './ProjectCard';
import portfolioData from '../content/portfolioData.json';

const ProjectGrid = ({ onCardClick }) => {
  return (
    <section className="project-grid" id="project-grid" aria-live="polite">
      {portfolioData.projects.map(project => (
        <ProjectCard key={project.id} project={project} onClick={onCardClick} />
      ))}
    </section>
  );
};

export default ProjectGrid;
