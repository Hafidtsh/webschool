import React from "react";

export default function Profil() {
  return (
    <div>
      <section id="profil" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Media & Lokasi Sekolah</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* YouTube */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">YouTube Sekolah</h3>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/uYkdGdyl09c?autoplay=1&mute=1&controls=0&loop=1&playlist=uYkdGdyl09c"
                title="YouTube video sekolah"
                frameBorder="0"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="mt-4 text-gray-600 text-sm">Kunjungi channel YouTube kami untuk melihat kegiatan, profil, dan prestasi PM Darussalam Purwakarta.</p>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Lokasi Sekolah</h3>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507062.00733321824!2d107.17197201153047!3d-6.83991238407203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f000d7628c5%3A0x519ff57a32bc02aa!2sPondok%20Modern%20Darussalam%20Purwakarta!5e0!3m2!1sid!2sid!4v1768816906915!5m2!1sid!2sid"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Sekolah"
              ></iframe>
            </div>

            <p className="mt-4 text-gray-600 text-sm">Gg. Rawamekar, Kel. Tegal Munjul Kec. Purwakarta Kab. Purwakarta, Jawa Barat (41116)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
