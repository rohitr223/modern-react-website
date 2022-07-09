import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact" text="Feel free to contact me." /> 
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact