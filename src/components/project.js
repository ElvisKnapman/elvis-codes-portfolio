import React from "react"

import Img from "gatsby-image"

const Project = ({ project }) => {
  console.log("PROJECT", project)
  return (
    <>
      <div class="content-box">
        <a
          class="headline-link"
          href="https://reduxtodo.now.sh/"
          target="_blank"
        >
          <h2 class="feature-heading">{project.node.title}</h2>
        </a>
        <a href="https://reduxtodo.now.sh/" target="_blank">
          <Img fluid={project.node.image.childImageSharp.fluid} />
        </a>
        <p className="project-desc">{project.node.description}</p>
      </div>
    </>
  )
}

export default Project
