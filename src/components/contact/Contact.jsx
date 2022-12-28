import React, { useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import "./contact.css"
import { MdOutlineMail } from "react-icons/md"
import { SiMinutemailer } from "react-icons/si"
import { AiOutlinePhone } from "react-icons/ai"
import { HiOutlineClipboardCopy } from "react-icons/hi"

const Contact = ({ handleIntersections }) => {
  const form = useRef()
  const contactRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersections, {
      root: null,
      threshold: 0.3,
    })
    observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_rxz80ct",
        "template_h6p4nf6",
        form.current,
        "nALBAX8wa83_oBRmN"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("thomaspendletondev@gmail.com")
  }

  return (
    <section id="contact" ref={contactRef} className="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5 onClick={() => copyEmail()}>thomaspendletondev@gmail.com</h5>
            <a href="mailto:thomaspendletondev@gmail.com">Send an Email</a>
          </article>
          {/* <article className="contact_option">
            <SiMinutemailer className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>thomas6576@yahoo.com</h5>
            <a href="https:">Send an Email</a>
          </article> */}
          {/* <article className="contact_option">
            <AiOutlinePhone className="contact_option-icon" />
            <h4>Email</h4>
            <h5>thomas6576@yahoo.com</h5>
            <a href="mailto:thomas6576@yahoo.com">Send a message</a>
          </article> */}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
