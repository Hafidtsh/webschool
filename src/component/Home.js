import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import foto1 from "../assets/pic 1.jpeg";

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${foto1})` }}>
      <Navbar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}
