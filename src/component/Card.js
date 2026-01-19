import React from "react";
import { motion } from "framer-motion";

// import gambar
import facility from "../assets/facility.jpeg";
import teacher from "../assets/teacher2.jpeg";
import environment from "../assets/enviroment.jpeg";

export default function Card() {
  const cards = [
    {
      title: "Fasilitas Modern",
      image: facility,
      description: "Kami menyediakan fasilitas modern untuk mendukung proses belajar terbaik.",
    },
    {
      title: "Guru Profesional",
      image: teacher,
      description: "Didukung oleh tenaga pengajar profesional dan berpengalaman.",
    },
    {
      title: "Ekstrakurikuler",
      image: environment,
      description: "Ekstrakurikuler Archery, Pencak Silat dll.",
    },
  ];

  return (
    <section id="#card" className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-12">Keunggulan Sekolah</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div key={i} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className="bg-white rounded-2xl shadow-md overflow-hidden">
            {/* Gambar */}
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />

            {/* Konten */}
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
