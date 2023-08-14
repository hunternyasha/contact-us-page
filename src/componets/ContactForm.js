import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9u4xiff",
        "template_qw2o1mi",
        form.current,
        "FvG0SSc6TstChHUEM"
      )
      .then(
        (result) => {
          alert("Message Sent");
        },
        (error) => {
          alert('Message not sent')
        }
      );
  };
  return (
    <>
      <div className="contactUs container">
        <div className="row">
          <div className="col-12">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="example@gmail.com"
              />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
