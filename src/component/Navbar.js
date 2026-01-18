import React from "react";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="flex items-center gap-5 text-2xl font-bold text-blue-600">
          <img src={Logo} className="size-14" />
          PM Darussalam Purwakarta
        </h1>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#" className="hover:text-blue-600">
            Beranda
          </a>
          <a href="#" className="hover:text-blue-600">
            Profil
          </a>
          <a href="#" className="hover:text-blue-600">
            Akademik
          </a>
          <a href="#" id="footer" className="hover:text-blue-600">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
}
