import React from 'react'
import "./AboutContentStyles.css"
import {Link} from "react-router-dom"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react frontend dev. I create responsive secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent