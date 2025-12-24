import React from 'react';
import portfolioData from '../content/portfolioData.json';

// Header component
const Header = () => {
  const { name, role, email, phone } = portfolioData.contact;

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <div className="header-brand">
          <div className="header-identity">
            <h1 className="header-name">{name}</h1>
            <p className="header-role">{role}</p>
          </div>
        </div>
        
        <nav className="header-nav">
          <div className="header-info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">{email}</span>
          </div>
          <div className="header-info-item">
             <span className="info-label">Phone:</span>
             <span className="info-value">+972 54 567 0248</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
