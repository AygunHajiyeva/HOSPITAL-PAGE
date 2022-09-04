import React from "react";
import "./Services.css";
import { Servicecardinfo } from "./Servicecardinfo";

export default function Services() {
  return (
    <div className="services">
      <h1>Our services</h1>
      <p className="services-p">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      <section className="services-section">
        {Servicecardinfo.map((item, index) => {
          return (
            <div className="service" key={index}>
              <span class="material-icons">{item.icon}</span>
              <h3 className="service-heading">{item.heading}</h3>
              <p className="service-p">{item.p}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
