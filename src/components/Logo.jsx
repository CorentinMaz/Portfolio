import React from 'react';
import logoPng from '../assets/img/logo.png';

export const Logo = () => {
  return (
    <>
      <a href="#home" className="floating-logo" aria-label="Accueil">
        <span className="logo-wrap">
          <img src={logoPng} alt="Logo" className="logo-img" loading="eager" />
        </span>
      </a>
    </>
  );
}
