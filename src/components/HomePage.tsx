import React from "react";
import type { PageProps } from "../App"; // Asumsi App.tsx ada di folder src
// Asumsi App.tsx ada di folder src

const HomePage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <div className="flex flex-1 animate-fadeInUp flex-col items-center justify-center p-5 text-center h-screen gap-8">
      <button
        onClick={() => navigateTo("team")}
        className="top-7 right-7 cursor-pointer rounded-full border-2 border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/25 hover:shadow-xl md:text-base"
      >
        TEAM DEVELOPMENT
      </button>
      <h1 className="mb-5 text-5xl font-extrabold text-white text-shadow-md md:text-6xl lg:text-7xl">
        Media Pembelajaran Bahasa Arab Kelas XI
      </h1>
      <p className="mb-12 text-xl italic text-gray-200 md:text-2xl lg:text-3xl">
        Mari belajar Bahasa Arab dengan semangat! 🌟
      </p>
      <button
        onClick={() => navigateTo("main-menu")}
        className="animate-glow cursor-pointer rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-20 py-6 text-3xl font-extrabold uppercase tracking-widest text-white shadow-lg shadow-cyan-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-400/60 md:text-4xl"
      >
        START
      </button>
    </div>
  );
};

export default HomePage;
