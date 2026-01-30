import React, { useState } from "react";
import art1 from "../assets/pic1.jpeg";
import art2 from "../assets/pic2.jpeg";
import art3 from "../assets/pic3.jpeg";

export default function Artikel() {
  const [openIndex, setOpenIndex] = useState(null);

  const articles = [
    {
      title: "Penerimaan Santri Baru 2026",
      date: "12 Januari 2026",
      image: art1,
      tips: ["Siapkan berkas sejak dini", "Ikuti jadwal seleksi", "Perbanyak latihan akademik"],
    },
    {
      title: "Tips Sukses Belajar di Boarding School",
      date: "5 Januari 2026",
      image: art2,
      tips: ["Atur waktu belajar & istirahat", "Aktif dalam kegiatan asrama", "Jaga konsistensi ibadah"],
    },
    {
      title: "Trik Hafalan Cepat untuk Santri",
      date: "28 Desember 2025",
      image: art3,
      tips: ["Hafalan setelah Subuh", "Ulangi sebelum tidur", "Gunakan metode teman sebaya"],
    },
    {
      title: "Tips Sukses Belajar di Boarding School",
      date: "5 Januari 2026",
      image: art2,
      tips: ["Atur waktu belajar & istirahat", "Aktif dalam kegiatan asrama", "Jaga konsistensi ibadah"],
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <aside className="bg-gray-50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Artikel & Tips Santri</h3>

      <div className="space-y-6">
        {articles.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="flex flex-col sm:flex-row gap-4 p-3 rounded-xl bg-white shadow-sm">
              {/* Gambar */}
              <img src={item.image} alt={item.title} className="w-full sm:w-28 h-40 sm:h-24 object-cover rounded-xl" />

              {/* Konten */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Tips & Trik</span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>

                <h4 className="font-semibold text-gray-800">{item.title}</h4>

                {/* DESKTOP → langsung tampil */}
                <ul className="hidden md:block mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                  {item.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>

                {/* MOBILE → collapsible */}
                <div className="md:hidden mt-2">
                  {isOpen && (
                    <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-2">
                      {item.tips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  )}

                  <button onClick={() => toggle(i)} className="text-sm text-blue-600 font-semibold">
                    {isOpen ? "Tutup ▲" : "Selengkapnya ▼"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
