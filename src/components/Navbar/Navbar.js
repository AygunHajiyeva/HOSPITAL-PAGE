import React from "react";
import "./Navbar.css";
import { Menuitems } from "./Menuitems";
import { useState } from "react";

export default function Navbar() {
 
    
    const [clicked, setClicked] = useState(false);
    
   function handleClick() {
    setClicked(prevState=>!prevState)
   }
 


  return (
    <nav className="navbar">
      <h1 className="logo">Trafalgar</h1>
      <div className="menu-icon" onClick={handleClick}>
        <span class="material-icons">
            {clicked ? "close" :"menu" }
        </span>
      </div>

      <ul className= {
        clicked ? "nav-menu active" : "nav-menu"
      }>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
