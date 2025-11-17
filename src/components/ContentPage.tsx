import React from "react";
import type { ContentFileType } from "../App"; // Impor tipe dari App
// Impor tipe dari App

// Definisikan tipe untuk props yang diterima
export interface ContentConfig {
  title: string;
  content: ContentFileType;
}

interface ContentPageProps {
  config: ContentConfig | null;
}

const ContentPage: React.FC<ContentPageProps> = ({ config }) => {
  // Jika tidak ada config, jangan render apapun
  if (!config) return null;

  // Fungsi ini sekarang hanya merender satu konten
  const renderContent = () => {
    const { file, type } = config.content;

    switch (type) {
      case "image":
        return (
          <img
            src={file}
            alt={config.title}
            className="w-full max-w-full rounded-xl shadow-lg"
          />
        );
      case "video":
        return (
          <video controls className="w-full rounded-xl shadow-lg">
            <source src={file} type="video/mp4" />
            Browser Anda tidak mendukung tag video.
          </video>
        );
      case "audio":
        return (
          <audio controls className="w-full">
            <source src={file} type="audio/mpeg" />
            Browser Anda tidak mendukung tag audio.
          </audio>
        );
      case "text":
        return <p className="whitespace-pre-wrap text-lg text-white">{file}</p>;
      case "link":
        return (
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-cyan-500 px-6 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            Buka Link Latihan 🔗
          </a>
        );
      case "file":
      default:
        return (
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gray-600 px-6 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
          >
            Download File 📄
          </a>
        );
    }
  };

  return (
    <div className="w-full max-w-3xl animate-fadeInUp p-5 py-10 mx-auto">
      <h1 className="mb-10 text-center text-3xl font-bold text-white text-shadow-md md:text-4xl">
        {config.title}
      </h1>
      {/* Tidak ada lagi bagian "controls", langsung tampilkan konten */}
      <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentPage;
