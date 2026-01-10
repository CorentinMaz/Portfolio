import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../i18n";

export const Experience = () => {

  const { t } = useLanguage();
  const experiences = t('experience.items') || [];

  return (
    <section className="experience" id="experience">
      <Container fluid="xl">
        <Row className="experience-cards" data-aos="fade-up">
          <Col xs={12} data-aos="fade-up" data-aos-delay="80">
            <div className="info-card exp-card">
              <div className="exp-card-head">
                <h2>{t('experience.title')}</h2>
                <p>{t('experience.subtitle')}</p>
              </div>
              <Row className="experience-grid">
                {experiences.map((exp, index) => (
                  <Col xs={12} md={5} key={index} data-aos="fade-up" data-aos-delay={(index % 5) * 80 + 220}>
                    <div className="experience-item">
                      <div className="experience-header">
                        <h3>{exp.title}</h3>
                        <span className="company">{exp.company}</span>
                      </div>
                      <p className="period">{exp.period}</p>
                      <p className="description">{exp.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
