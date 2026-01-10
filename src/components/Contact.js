import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../i18n";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
  const { t, lang } = useLanguage();
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('contact.form.submit'));
  const [status, setStatus] = useState({});
  const form = useRef();

  useEffect(() => {
    setButtonText(t('contact.form.submit'));
  }, [lang, t]);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sttmswc", "template_n484sln", form.current, "fhFOm9qVTAPEkO2RY")
    .then((result) => {
      setStatus({ success: true, message: t('contact.form.success')});
    }, (error) => {
      setStatus({ success: false, message: t('contact.form.error')});
    });
    const form_reset = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    setFormDetails(form_reset);
  };

  return (
    <section className="contact" id="connect">
      <Container fluid="xl">
        <Row className="contact-cards" data-aos="fade-up">
          <Col xs={12} data-aos="fade-up" data-aos-delay="80">
            <div className="info-card contact-card">
              <div className="contact-card-head">
                <h2>{t('contact.title')}</h2>
              </div>
              <Row className="contact-grid">
                <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="160">
                  <div className="contact-info">
                    <h3>{t('contact.directContact')}</h3>
                    <div className="contact-link">
                      <img src={require("../assets/img/mail.png")} alt="mail" className="contact-icon" />
                      <a href="mailto:corentin.mazabrard@gmail.com">corentin.mazabrard@gmail.com</a>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8} data-aos="fade-up" data-aos-delay="200">
                  <form ref={form} onSubmit={handleSubmit} className="contact-form">
                    <Row>
                      <Col xs={12} sm={6} className="px-2">
                        <input required name='first' type="text" value={formDetails.firstName} placeholder={t('contact.form.firstName')} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col xs={12} sm={6} className="px-2">
                        <input required name='last' type="text" value={formDetails.lastName} placeholder={t('contact.form.lastName')} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col xs={12} className="px-2">
                        <input required name="mail" type="email" value={formDetails.email} placeholder={t('contact.form.email')} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col xs={12} className="px-2">
                        <textarea required name='message' rows="5" value={formDetails.message} placeholder={t('contact.form.message')} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      </Col>
                      <Col xs={12} className="px-2">
                        <button type="submit" className="contact-submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col xs={12}>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
