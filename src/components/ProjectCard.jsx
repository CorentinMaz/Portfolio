import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 className="proj-color-text">{title}</h4>
            <span className="proj-color-text">{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
