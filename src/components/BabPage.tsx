import React from "react";
import { type ContentFileType } from "../App"; // Impor tipe baru
import type { ContentConfig } from "./ContentPage";

interface BabPageProps {
  babData: BabData;
  showContentPage: (config: ContentConfig) => void;
}

// Tipe untuk data Bab yang diterima
interface BabData {
  id: number;
  title: string;
  subtitle: string;
  items: string[];
  file: Record<string, ContentFileType>; // Tipe yang diperbarui
}

// Tipe untuk props BabPage
interface BabPageProps {
  babData: BabData;
  showContentPage: (config: ContentConfig) => void;
}

// Tipe untuk konfigurasi SubMenu
interface SubMenuConfig {
  [key: string]: {
    icon: string;
    title: string;
    subtitle: string;
    style: string;
  };
}

const subMenuConfig: SubMenuConfig = {
  mufrodat: {
    icon: "📚",
    title: "Mufrodat",
    subtitle: "Kosakata",
    style: "border-l-pink-400",
  },
  hiwar: {
    icon: "💬",
    title: "Hiwar",
    subtitle: "Dialog",
    style: "border-l-teal-300",
  },
  audio: {
    icon: "🎵",
    title: "Audio",
    subtitle: "Materi Audio",
    style: "border-l-orange-200",
  },
  teks: {
    icon: "📄",
    title: "Teks",
    subtitle: "Materi Teks",
    style: "border-l-blue-500",
  },
  qowaid: {
    icon: "📋",
    title: "Qowaid",
    subtitle: "Tata Bahasa",
    style: "border-l-orange-300",
  },
  latihan: {
    icon: "✏️",
    title: "Latihan",
    subtitle: "Soal Latihan",
    style: "border-l-pink-400",
  },
};

interface SubMenuItemProps {
  itemKey: string;
  onClick: () => void;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ itemKey, onClick }) => {
  const item = subMenuConfig[itemKey];
  if (!item) return null;

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-400 hover:-translate-y-2 hover:bg-white/20 hover:shadow-2xl ${item.style} border-l-4`}
    >
      <span className="mb-3 block text-5xl">{item.icon}</span>
      <div className="text-2xl font-bold text-white">{item.title}</div>
      <div className="text-lg italic text-gray-200">{item.subtitle}</div>
    </div>
  );
};

const BabPage: React.FC<BabPageProps> = ({ babData, showContentPage }) => {
  return (
    <div className="w-full max-w-4xl animate-fadeInUp p-5 py-10 mx-auto">
      <h1 className="mb-10 text-center font-bold text-white text-shadow-md">
        <span className="block font-amiri text-5xl md:text-6xl">{`BAB ${babData.id} - ${babData.title}`}</span>
        <span className="mt-2 block text-2xl text-gray-200 md:text-3xl">
          {babData.subtitle}
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {babData.items.map((itemKey) => {
          // Ambil data konten dari prop babData
          const content = babData.file[itemKey];

          // Pastikan konten ada sebelum membuat item menu
          if (!content) return null;

          return (
            <SubMenuItem
              key={itemKey}
              itemKey={itemKey}
              onClick={() =>
                showContentPage({
                  title: `BAB ${babData.id} - ${subMenuConfig[itemKey].title} (${subMenuConfig[itemKey].subtitle})`,
                  content: content, // Teruskan objek konten
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default BabPage;
