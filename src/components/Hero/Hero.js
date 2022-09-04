import React from "react";
import "./Hero.css";
import doctors from "./images/doctors.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <section className="hero-info">
        <h1 className="hero-heading">Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="hero-btn">Consult today</button>
      </section>

      <img className="hero-img" src={doctors} />
    </div>
  );
}
