import React, { useState } from "react";
import HomePage from "./components/HomePage";
import MainMenuPage from "./components/MainMenuPage";
import BabPage from "./components/BabPage";
import LatihanPage from "./components/LatihanPage";
import EvaluasiPage from "./components/EvaluasiPage";
import TeamPage from "./components/TeamPage";
import ContentPage, { type ContentConfig } from "./components/ContentPage"; // Impor tipe
import Notification, { type NotificationType } from "./components/Notification"; // Impor tipe

// --- Impor Aset Tiruan Anda ---
import {
  Bab1Image,
  Bab1Video,
  Bab1Audio,
  Bab1Text,
  Bab1Qowaid,
  Bab2Image,
  Bab2Video,
  Bab2Audio,
  Bab2Text,
  Bab3Video,
  Bab3Audio,
  Bab3Text,
  Bab3Image,
  Bab4Image,
  Bab4Video,
  Bab4Audio,
  Bab4Text,
  Bab5Image,
  Bab5Video,
  Bab5Audio,
  Bab5Text,
  Bab6Image,
  Bab6Video,
  Bab6Audio,
  Bab6Text,
} from "./asstes.mock";

// --- Tipe Baru ---
export interface ContentFileType {
  file: any; // Bisa string (path/url) atau variabel
  type: "image" | "video" | "audio" | "text" | "file" | "link";
}

interface BabItem {
  id: number;
  title: string;
  subtitle: string;
  items: string[];
  file: Record<string, ContentFileType>; // Ini adalah tambahan baru
}
// --- Akhir Tipe Baru ---

const babData: Record<string, BabItem> = {
  bab1: {
    id: 1,
    title: "التَّسَوُق",
    subtitle: "Tasawuq (Belanja)",
    items: ["mufrodat", "hiwar", "audio", "teks", "qowaid"],
    file: {
      mufrodat: { file: Bab1Image, type: "file" },
      hiwar: { file: Bab1Video, type: "video" },
      audio: { file: Bab1Audio, type: "audio" },
      teks: { file: Bab1Text, type: "file" }, // 'teks' bukan 'text'
      qowaid: { file: Bab1Qowaid, type: "file" },
    },
  },
  bab2: {
    id: 2,
    title: "السَّفَر",
    subtitle: "Safar (Bepergian)",
    items: ["mufrodat", "hiwar", "audio", "teks"],
    file: {
      mufrodat: { file: Bab2Image, type: "image" },
      hiwar: { file: Bab2Video, type: "video" },
      audio: { file: Bab2Audio, type: "audio" },
      teks: { file: Bab2Text, type: "file" },
    },
  },
  bab3: {
    id: 3,
    title: " الصِّحَ",
    subtitle: "Shihah (Kesehatan)",
    items: ["mufrodat", "hiwar", "audio", "teks"],
    file: {
      mufrodat: { file: Bab3Image, type: "image" },
      hiwar: { file: Bab3Video, type: "video" },
      audio: { file: Bab3Audio, type: "audio" },
      teks: { file: Bab3Text, type: "file" },
    },
  },
  bab4: {
    id: 4,
    title: " الصِّحَ",
    subtitle: "Shihah (Kesehatan)",
    items: ["mufrodat", "hiwar", "audio", "teks"],
    file: {
      mufrodat: { file: Bab4Image, type: "image" },
      hiwar: { file: Bab4Video, type: "video" },
      audio: { file: Bab4Audio, type: "audio" },
      teks: { file: Bab4Text, type: "image" },
    },
  },
  bab5: {
    id: 5,
    title: " الصِّحَ",
    subtitle: "Shihah (Kesehatan)",
    items: ["mufrodat", "hiwar", "audio", "teks"],
    file: {
      mufrodat: { file: Bab5Image, type: "file" },
      hiwar: { file: Bab5Video, type: "video" },
      audio: { file: Bab5Audio, type: "audio" },
      teks: { file: Bab5Text, type: "file" },
    },
  },
  bab6: {
    id: 6,
    title: " الصِّحَ",
    subtitle: "Shihah (Kesehatan)",
    items: ["mufrodat", "hiwar", "audio", "teks"],
    file: {
      mufrodat: { file: Bab6Image, type: "file" },
      hiwar: { file: Bab6Video, type: "video" },
      audio: { file: Bab6Audio, type: "audio" },
      teks: { file: Bab6Text, type: "file" },
    },
  },
};

export type PageID =
  | "home"
  | "main-menu"
  | "bab1"
  | "bab2"
  | "bab3"
  | "bab4"
  | "bab5"
  | "bab6"
  | "latihan"
  | "evaluasi"
  | "team"
  | "content";

export interface PageProps {
  navigateTo: (pageId: PageID) => void;
}

export interface NotificationProps {
  showNotification: (message: string, type?: NotificationType["type"]) => void;
}

const App: React.FC = () => {
  const [page, setPage] = useState<PageID>("home");
  const [prevPage, setPrevPage] = useState<PageID>("home");
  // ContentConfig sekarang berisi data konten, bukan hanya tipe
  const [contentConfig, setContentConfig] = useState<ContentConfig | null>(
    null
  );
  const [notification, setNotification] = useState<NotificationType | null>(
    null
  );

  const showNotification: NotificationProps["showNotification"] = (
    message,
    type = "success"
  ) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const navigateTo: PageProps["navigateTo"] = (pageId) => {
    setPrevPage(page);
    setPage(pageId);
  };

  const goBack = () => {
    setPage(prevPage);
  };

  // Fungsi ini sekarang menerima ContentConfig yang sudah lengkap
  const showContentPage = (config: ContentConfig) => {
    setContentConfig(config);
    navigateTo("content");
  };

  const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <button
      onClick={onClick}
      className="fixed bottom-7 right-7 z-50 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-red-500/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/60"
    >
      ← BACK
    </button>
  );

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "main-menu":
        return (
          <>
            <MainMenuPage navigateTo={navigateTo} />
            <BackButton onClick={() => navigateTo("home")} />
          </>
        );
      case "bab1":
        return (
          <>
            <BabPage babData={babData.bab1} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "bab2":
        return (
          <>
            <BabPage babData={babData.bab2} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "bab3":
        return (
          <>
            <BabPage babData={babData.bab3} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "bab4":
        return (
          <>
            <BabPage babData={babData.bab4} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "bab5":
        return (
          <>
            <BabPage babData={babData.bab5} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "bab6":
        return (
          <>
            <BabPage babData={babData.bab6} showContentPage={showContentPage} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "latihan":
        return (
          <>
            <LatihanPage showNotification={showNotification} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "evaluasi":
        return (
          <>
            <EvaluasiPage showNotification={showNotification} />
            <BackButton onClick={() => navigateTo("main-menu")} />
          </>
        );
      case "team":
        return (
          <>
            <TeamPage />
            <BackButton onClick={() => navigateTo("home")} />
          </>
        );
      case "content":
        return (
          <>
            {/* Cukup teruskan config, ContentPage akan menanganinya */}
            <ContentPage config={contentConfig} />
            <BackButton onClick={goBack} />
          </>
        );
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="container relative min-h-full">
      <Notification notification={notification} />
      {renderPage()}
    </div>
  );
};

export default App;
