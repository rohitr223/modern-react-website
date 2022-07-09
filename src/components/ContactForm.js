import React from 'react'
import "./ContactFormStyle.css"


const ContactForm = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Your Email</label>
            <input type="email" />
            <label>Your Message</label>
            <textarea rows="6" placeholder="Type your Your Message"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm