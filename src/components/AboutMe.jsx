import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../i18n";

export const AboutMe = () => {

  const { t } = useLanguage();

  return (
    <section className="skill" id="about">
      <Container fluid="xl">
        <Row className="skill-cards">
          <Col xs={12} data-aos="fade-up" data-aos-delay="80">
            <div className="info-card about-card">
              <h2>{t('skills.title')}</h2>
              <p>{t('skills.description')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
