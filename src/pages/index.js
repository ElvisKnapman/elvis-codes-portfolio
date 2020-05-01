import React from "react"

import Layout from "../components/layout"
import Test from "../components/test"
import "../styles/index.scss"

export default () => {
  return (
    <Layout>
      <div>
        Hello world!
        <Test>
          <p>This is the test component</p>
        </Test>
      </div>
    </Layout>
  )
}
