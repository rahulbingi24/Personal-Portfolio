import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id",      // replace with EmailJS service id
        "template_id",     // replace with EmailJS template id
        form.current,
        "public_key"       // replace with EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Feel free to reach out if you'd like to collaborate or discuss a project.
      </p>

      <div className="contact-container">

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </section>
  );
};

export default Contact;