import React from "react"

import Project from "./project"

const Projects = ({ projects }) => {
  return (
    <section class="first-content" id="learn-more">
      <h3 class="section-header">Projects</h3>
      <div class="underline">&nbsp;</div>
      <div class="container">
        {projects.edges.map((project, idx) => {
          return <Project project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
