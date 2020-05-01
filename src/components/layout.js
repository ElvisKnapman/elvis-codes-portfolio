import React from "react"

import NavLogo from "../images/ek-only-nav.png"
import FooterLogo from "../images/ek-logo.png"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="top-nav">
          <div className="site-name">
            <img className="ek-logo" src={NavLogo} />
          </div>
          <div className="right-nav">
            <a href="#learn-more">
              <i className="far fa-file"></i>Projects
            </a>
            <a href="#">
              <i className="fas fa-question-circle"></i>About
            </a>
            <a href="#">
              <i className="fas fa-envelope"></i>Contact
            </a>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img src={FooterLogo} alt="Elvis Knapman logo" />
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default Layout
