import React from "react"

const Hero = props => {
  return (
    <main>
      <div className="hero">
        <h1 className="headline">Elvis Knapman</h1>
        <div className="typing">
          <h2 className="subhead">Full Stack Web Developer</h2>
        </div>
        <div className="main-button">
          <a href="#learn-more">
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
