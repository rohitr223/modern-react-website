import "./HeroimgStyles.css"
import React from 'react'
import IntroImg from "../assets/lappy.jpg"
import {Link} from 'react-router-dom'

// Adding image to homepage
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} className="into-img" alt="hero-img" />
        </div>
        <div className="content">
            <p>HI, I'm an E&TC Engineer! AND</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg