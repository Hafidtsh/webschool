import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import foto1 from "../assets/backgroud2.jpeg";
import Profil from "./Profil";

export default function Home() {
  return (
    <div id="beranda">
      <Navbar />

      {/* HERO dengan background */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${foto1})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Konten Hero */}
        <div className="relative z-10 w-full">
          <Hero />
        </div>
      </div>

      {/* Section lain normal */}
      <Profil />
      <Card />
      <Footer />
    </div>
  );
}
