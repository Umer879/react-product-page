import React from "react";
import "./ContactForm.css";
import Submitt from "./Submitt";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-details">
        <div className="contact-info">
          <h1>Contact Us</h1>
        <p>
          Email, call, or complete the form to learn how Snappy can solve your
          messaging problem
        </p>
        <p> info@snappy.io</p>
        <p>321-221-231</p>
        <p> Customer Support</p>
        </div>

        <div className="support-topics">
          <div className="topic">
            <h3>Customer Support</h3>
            <p>
              Our support team is available around the clock to address any
              concerns or queries you may have.
            </p>
          </div>
          <div className="topic">
            <h3>Feedback and Suggestions</h3>
            <p>
              We value your feedback and are constantly working to improve
              Snappy. Your input is crucial in shaping the future of Snappy.
            </p>
          </div>
          <div className="topic">
            <h3>Media Inquiries</h3>
            <p>
              For media-related questions or press inquiries, please contact us
              at:{" "}
              <a href="https://www.media@snappycorp.com">
                media@snappycorp.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Submitt />
    </div>
  );
};

export default ContactForm;
