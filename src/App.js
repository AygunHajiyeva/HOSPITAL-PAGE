import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
