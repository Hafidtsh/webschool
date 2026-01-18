import React from "react";
import { motion } from "framer-motion";
import foto1 from "../assets/pic 1.jpeg";
import foto2 from "../assets/pic 2.jpeg";
import foto3 from "../assets/pic 3.jpeg";

export default function Hero() {
  const images = [foto1, foto2, foto3];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 detik

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div style={{ backgroundImage: `url(${foto1})` }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Membangun Generasi <span className="text-blue-600">Cerdas & Berkarakter</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            I SMP I SMA I Boarding School I Khusus Putra <br />
            Meniti jalan menapak bumi menggapai ridho Lillah
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-2xl px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Daftar Sekarang</button>
            <button className="rounded-2xl px-6 py-3 border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">Pelajari Lebih Lanjut</button>
          </div>
        </motion.div>

        <motion.div key={index} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-inner">
          <img src={images[index]} alt="Hero Sekolah" className="w-full h-full object-cover" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </section>
    </div>
  );
}
