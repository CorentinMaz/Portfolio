import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../i18n";

export const Skills = () => {

  const { t } = useLanguage();

  const skills = [
    { name: "React.js", proficiency: "90%" },
    { name: "TypeScript", proficiency: "90%" },
    { name: "JavaScript", proficiency: "95%" },
    { name: "React Native", proficiency: "85%" },
    { name: "Node.js", proficiency: "85%" },
    { name: "PHP 8 - Symfony", proficiency: "80%" },
    { name: "Java 8 - Spring Boot", proficiency: "80%" },
    { name: "SvelteKit", proficiency: "75%" },
    { name: "Tailwind CSS/Bootstrap", proficiency: "90%" },
    { name: "Git / Gitlab / Jira", proficiency: "85%" },
  ];

    return (
        <section className="skill" id="skills">
            <Container fluid="xl">
                <Row className="skill-cards">
                    <Col xs={12} data-aos="fade-up" data-aos-delay="180">
                        <div className="info-card tech-card">
                            <div className="tech-card-head">
                                <h2>{t('skills.stackTitle')}</h2>
                            </div>
                            <Row className="skill-grid">
                                {skills.map((skill, index) => (
                                    <Col xs={12} sm={6} md={4} lg={3} key={index} data-aos="fade-up" data-aos-delay={(index % 6) * 70 + 220}>
                                        <div className="skill-item">
                                            <h4>{skill.name}</h4>
                                            <div className="skill-bar">
                                                <div className="skill-fill" style={{ width: skill.proficiency }}></div>
                                            </div>
                                            <span className="skill-percent">{skill.proficiency}</span>
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
