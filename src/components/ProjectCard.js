import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projectUrl}>
          <img src={imgUrl} alt="imageUrl" />
          <div className="proj-txtx">
            <h4 className="proj-color-text">{title}</h4>
            <h7 className="proj-color-text">{description}</h7>
          </div>
        </a>
      </div>
    </Col>
  )
}
