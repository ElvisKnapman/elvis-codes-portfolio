import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const Project = ({ project }) => {
  console.log("PROJECT", project)
  return (
    <>
      <div className="content-box">
        <h2 className="feature-heading">{project.node.title}</h2>

        <a href={project.node.project_link} target="_blank">
          <Img
            className="project-image"
            fluid={project.node.image.childImageSharp.fluid}
            alt={project.node.image_alt_text}
          />
        </a>
        <p className="project-desc">{project.node.description}</p>
        <div className="project-links">
          <div className="project-btn site">
            <FontAwesomeIcon icon={faLink} className="project-btn-icon" /> Site
          </div>
          <div className="project-btn github">
            <FontAwesomeIcon icon={faGithub} className="project-btn-icon" />{" "}
            GitHub
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
