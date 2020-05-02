import React from "react"

import Img from "gatsby-image"

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
      </div>
    </>
  )
}

export default Project
