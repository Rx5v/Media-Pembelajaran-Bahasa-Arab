import React from "react";
import type { PageProps, PageID } from "../App";

interface MenuItemType {
  id: PageID; // Menggunakan PageID yang sudah didefinisikan
  bab: number | string;
  title: string;
  subtitle: string;
  desc: string;
  type: "bab" | "special";
}

const menuItems: MenuItemType[] = [
  {
    id: "bab1",
    bab: 1,
    title: "التَّسَوُق",
    subtitle: "Tasawuq (Belanja)",
    desc: "Pelajari kosakata dan percakapan seputar kegiatan berbelanja",
    type: "bab",
  },
  {
    id: "bab2",
    bab: 2,
    title: "السَّفَر",
    subtitle: "Safar (Bepergian)",
    desc: "Eksplorasi bahasa Arab untuk perjalanan dan transportasi",
    type: "bab",
  },
  {
    id: "bab3",
    bab: 3,
    title: "الصِّحَة",
    subtitle: "Shihah (Kesehatan)",
    desc: "Pelajari istilah kesehatan dan bagian tubuh dalam bahasa Arab",
    type: "bab",
  },
  {
    id: "bab4",
    bab: 4,
    title: "الجَامِعَة",
    subtitle: "Al Jaami'ah (Universitas)",
    desc: "Bahasa Arab untuk kehidupan kampus dan pendidikan tinggi",
    type: "bab",
  },
  {
    id: "bab5",
    bab: 5,
    title: "الحَج وَ الأُمْرَة",
    subtitle: "Haj wal Umroh (Haji dan Umroh)",
    desc: "Pelajari istilah dan doa untuk ibadah haji dan umroh",
    type: "bab",
  },
  {
    id: "bab6",
    bab: 6,
    title: "التِكْنُلُوجِيَا",
    subtitle: "Al Tiknulujiya (Teknologi)",
    desc: "Bahasa Arab modern untuk teknologi dan media digital",
    type: "bab",
  },
  {
    id: "latihan",
    bab: "📝",
    title: "LATIHAN SOAL",
    subtitle: "Uji Kemampuan",
    desc: "Kerjakan berbagai latihan untuk mengasah kemampuan",
    type: "special",
  },
  {
    id: "evaluasi",
    bab: "📊",
    title: "EVALUASI",
    subtitle: "Penilaian Akhir",
    desc: "Evaluasi komprehensif untuk semua materi",
    type: "special",
  },
];

interface MenuItemProps {
  item: MenuItemType;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => (
  <div
    onClick={onClick}
    className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 p-7 text-center backdrop-blur-lg transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-400 hover:bg-white/20 hover:shadow-2xl
      ${
        item.type === "bab"
          ? "border-l-[6px] border-l-cyan-400"
          : "border-l-[6px] border-l-red-400"
      }`}
  >
    <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-700 group-hover:left-full"></div>

    <div
      className={`mb-2 text-lg font-semibold ${
        item.type === "bab" ? "text-cyan-400" : "text-red-400"
      }`}
    >
      {item.type === "bab" ? `BAB ${item.bab}` : item.bab}
    </div>
    <div
      className={`mb-2 text-3xl text-white text-shadow-md ${
        item.type === "bab" ? "font-amiri" : "font-poppins font-bold"
      }`}
    >
      {item.title}
    </div>
    <div className="mb-4 text-xl font-medium text-gray-200">
      {item.subtitle}
    </div>
    <div className="text-base text-blue-200">{item.desc}</div>
  </div>
);

const MainMenuPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <div className="w-full max-w-6xl animate-fadeInUp p-5 py-10 mx-auto">
      <h1 className="mb-12 text-center text-5xl font-bold text-white text-shadow-md md:text-6xl">
        MAIN MENU
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => navigateTo(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainMenuPage;
