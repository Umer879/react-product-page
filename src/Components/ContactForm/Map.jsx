import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <div className="contact-map">
      <div className="map flex-basis">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.954085887335!2d72.83649498839902!3d33.605602294776546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99024717b629%3A0xc467d08f636c7444!2sFazaia%20Housing%20Scheme%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1749098304608!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="address flex-basis">
        <h5>Our Location</h5>
        <h2>Connecting Near and Far</h2>
        <h5>Headquarters</h5>
        <address>
            <p>Snappy Inc. <br /> San Francisco, USA <br />123 Tech Boulevard,Suite 456 <br />San
          Francisco, CA 12345 <br />United States</p>
        </address>
      </div>
    </div>
  );
};

export default Map;
