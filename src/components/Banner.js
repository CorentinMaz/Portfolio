import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../i18n";
import profileImg from "../assets/img/profile.jpg";

export const Banner = () => {

  const { t } = useLanguage();

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center banner-new-layout">
          <Col xs={12} md={6} className="banner-left" data-aos="fade-right" data-aos-delay="100">
            <div className="hero-title-block">
              <h1 className="hero-name-split">{t('banner.name')}</h1>
              <p className="hero-role">{t('banner.role')}</p>
              <div className="hero-divider"></div>
              <a href="#connect" className="hero-cta-link">
                <span>{t('banner.cta')}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10h10M15 6l4 4-4 4" />
                </svg>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="banner-right" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-container">
              <img src={profileImg} alt="Corentin Mazabrard" className="hero-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
