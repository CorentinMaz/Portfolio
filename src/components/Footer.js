import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useLanguage } from "../i18n";

export const Footer = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/corentin-mazabrard-54625a1a1/" title="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/CorentinMaz" title="GitHub"><img src={navIcon3} alt="GitHub" /></a>
            </div>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-right">
              <button
                className={`lang-toggle ${lang === 'en' ? 'en' : 'fr'}`}
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                <span className="toggle-track">
                  <span className="toggle-thumb"></span>
                </span>
                <span className="toggle-label fr-label">FR</span>
                <span className="toggle-label en-label">EN</span>
              </button>
              <p>{t('footer.rights')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
