import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <section className="footer-info">
        <h3>Trafalgar</h3>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </section>
      <section className="footer-columns">
        <p className="footer-heading">Company</p>
        <p className="footer-heading">Region</p>
        <p className="footer-heading">Help</p>
        <p>About</p>

        <p>Singapore</p>
        <p>Services</p>
        <p>Help center</p>
        <p>Canada</p>

        <p>How it works</p>
      </section>
    </div>
  );
}
