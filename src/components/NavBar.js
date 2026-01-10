import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logoPng from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useLanguage } from "../i18n";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [logoLoaded, setLogoLoaded] = useState(true);
  const { t, lang, toggleLanguage } = useLanguage();

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <span className="brand-wrap">
              {logoLoaded ? (
                <img
                  src={logoPng}
                  alt="Logo"
                  className="brand-logo"
                  loading="eager"
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                <span className="brand-fallback">CORENTIN MAZABRARD</span>
              )}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t('nav.home')}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t('nav.about')}</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>{t('nav.experience')}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">{lang === 'fr' ? 'EN' : 'FR'}</button>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/corentin-mazabrard-54625a1a1/" title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/CorentinMaz" title="GitHub"><img src={navIcon3} alt="GitHub" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{t('nav.contact')}</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
