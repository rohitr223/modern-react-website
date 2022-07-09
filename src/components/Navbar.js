import React, {useState} from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () =>setClick(!click)

    // Adding state to change the navbar color while scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        // if scrolling down (Y-axis) change navbar color
        if(window.scrollY >= 100){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
        <h1>TRIV</h1>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

        {/* Menu icons */}
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: "#fff"}} />) : (<FaBars size={30} style={{color: "#fff"}} />)}
        </div>
    </div>
  )
}

export default Navbar