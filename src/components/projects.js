import React from "react"

import Project from "./project"

const Projects = ({ projects }) => {
  return (
    <section className="first-content" id="learn-more">
      <h3 className="section-header">Projects</h3>
      <div className="underline">&nbsp;</div>
      <div className="projects-container">
        {projects.edges.map((project, idx) => {
          return <Project project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
