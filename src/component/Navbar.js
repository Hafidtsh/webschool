import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-blue-600">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-cover rounded-full" />
          PM Darussalam Purwakarta
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#beranda" className="hover:text-blue-600">
            Beranda
          </a>
          <a href="#profil" className="hover:text-blue-600">
            Media & Lokasi
          </a>
          <a href="#card" className="hover:text-blue-600">
            Keunggulan
          </a>
          <a href="#footer" className="hover:text-blue-600">
            Kontak
          </a>
        </nav>

        {/* Hamburger Button */}
        <button className="md:hidden flex flex-col gap-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
            <a href="#beranda" onClick={() => setOpen(false)}>
              Beranda
            </a>
            <a href="#profil" onClick={() => setOpen(false)}>
              Media & Lokasi
            </a>
            <a href="#card" onClick={() => setOpen(false)}>
              Keunggulan
            </a>
            <a href="#footer" onClick={() => setOpen(false)}>
              Kontak
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
