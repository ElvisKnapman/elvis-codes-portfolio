import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"

import NavLogo from "../data/images/ek-only-nav.png"
import FooterLogo from "../data/images/ek-logo.png"

const useStyles = makeStyles({
  root: {
    fontSize: "1.8rem",
    marginRight: "0.6rem",
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <header>
        <nav className="top-nav">
          <div className="site-name">
            <img className="ek-logo" src={NavLogo} />
          </div>
          <div className="right-nav">
            <a href="#learn-more">
              <InsertDriveFileOutlinedIcon classes={{ root: classes.root }} />{" "}
              Projects
            </a>
            <a href="#">
              <InfoOutlinedIcon classes={{ root: classes.root }} /> About
            </a>
            <a href="#">
              <EmailOutlinedIcon classes={{ root: classes.root }} /> Contact
            </a>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <img
          src={FooterLogo}
          alt="Elvis Knapman logo"
          className="footer-logo"
        />
        <p className="copyright">
          &copy;{new Date().getFullYear()} — created by Elvis Knapman while
          missing 🥅🏒
        </p>
      </footer>
    </>
  )
}

export default Layout
