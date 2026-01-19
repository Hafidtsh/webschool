import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Kontak (Kiri) */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2 text-blue-100">
            <li>📍 Gg. Rawamekar, Kel. Tegal Munjul Kec. Purwakarta Kab. Purwakarta, Jawa Barat (41116)</li>
            <li>📞 0859- 7458 -3604</li>
            <li>✉️ darussalampurwakarta@gmail.com</li>
          </ul>
        </div>
        {/* Sosial Media - Kanan */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/darussalampurwakarta/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
            <FaInstagram size={18} />
          </a>

          <a href="https://www.tiktok.com/@darussalampurwakarta" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
            <FaTiktok size={18} />
          </a>

          <a href="https://www.youtube.com/@darussalampurwakarta" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
            <FaYoutube size={18} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100092544127425" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
            <FaFacebook size={18} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100092544127425" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition">
            <FaTwitter size={18} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-blue-100">© {new Date().getFullYear()} Hafidtsh. All rights reserved.</div>
      </div>
    </footer>
  );
}
