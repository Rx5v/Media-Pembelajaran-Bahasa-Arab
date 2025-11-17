import React, { useState } from "react";
import type { NotificationProps } from "../App";

interface LinkBasedPageProps extends NotificationProps {
  title: string;
  placeholder: string;
  icon: string;
}

interface LinkItem {
  id: number;
  url: string;
}

const LinkBasedPage: React.FC<LinkBasedPageProps> = ({
  title,
  placeholder,
  icon,
  showNotification,
}) => {
  const [links, setLinks] = useState<string>(
    "https://docs.google.com/forms/d/e/1FAIpQLSfm_7P-7N6fblGel7AAELWEpZYhO78yBinCx_eqto3mlR7IiA/viewform?usp=header"
  );
  const [linkInput, setLinkInput] = useState<string>("");
  const [counter, setCounter] = useState<number>(0);

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="w-full max-w-3xl animate-fadeInUp p-5 py-10 mx-auto">
      <h1 className="mb-10 text-center text-4xl font-bold text-white text-shadow-md">
        {icon} {title}
      </h1>
      <p className="text-white">Silahkan buka tautan berikut untuk evaluasi</p>
      <div className="mt-10 space-y-4">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/15 p-5">
          <a
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 truncate text-lg font-semibold text-cyan-300 hover:underline"
          >
            {icon} {links}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkBasedPage;
