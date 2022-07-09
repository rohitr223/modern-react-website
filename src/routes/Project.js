import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import PricingCard from "../components/PricingCard"


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="HIRE ME" text="Hire me to get started with your dream website."/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project