import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GeneralRail from './components/GeneralRail';
import ProjectGrid from './components/ProjectGrid';
import Modal from './components/Modal';

import portfolioData from './content/portfolioData.json';
import profilePic from './assets/profile.jpg';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [selectedProject]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="floating-avatar">
        <img 
          src={profilePic} 
          alt="Portrait" 
        />
      </div>
      <Header />

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">// Integration Manager & Engineering Specialist</p>
          <h1>Expertise in robotics, engineering innovation, and technical project management.</h1>
          <p className="lede">Proven leader in high-pressure environments. Hands-on experience with AI implementation, embedded systems, and advanced 3D design.</p>
        </div>
      </section>

      <main className="wrap">
        <section className="general-section" aria-label="Moments & Field Notes">
          <div className="general-head">
            <h2 className="simple-head">Field snapshots & moments</h2>
          </div>
          <GeneralRail />
        </section>

        <section className="projects-section">
          <h2 className="simple-head">Selected projects</h2>
          <ProjectGrid onCardClick={handleCardClick} />
        </section>
      </main>

      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
