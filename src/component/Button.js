import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Button() {
  return (
    <div className="flex justify-center items-center w-full px-4">
      <a
        href="/files/brosur.pdf"
        download
        className="
          inline-flex items-center gap-2
          px-5 py-3 md:px-6 md:py-3
          my-4
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          text-sm md:text-base
          hover:bg-blue-700
          transition
        "
      >
        <FaDownload className="text-base md:text-lg" />
        Download Brosur
      </a>
    </div>
  );
}
