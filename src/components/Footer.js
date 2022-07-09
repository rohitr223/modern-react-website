import React from 'react'
import './FooterStyle.css'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Mumbai</p>
                    </div>    
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    122128982
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    ehwj@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is me, the founder and CEO of TechER and 
                    I love discussing new projects and design challenges.
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "2rem"}} />
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "2rem"}} />
                    <FaLinkedinIn size={30} style={{color: "#fff", marginRight: "2rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer