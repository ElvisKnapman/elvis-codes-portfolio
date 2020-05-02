import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Hero from "../components/hero"
import "../styles/index.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      projects: allProjectsJson {
        edges {
          node {
            id
            title
            description
            resources
            project_link
            github_link
            image_alt_text
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero />
      <Projects projects={data.projects} />
    </Layout>
  )
}
