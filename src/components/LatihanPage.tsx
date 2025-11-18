import React from "react";
import type { NotificationProps } from "../App";

import latihan1 from "../assets/bab-1/materi latihan soal.docx";
import latihan2 from "../assets/bab-2/latihan soal safar.docx";
import latihan3 from "../assets/bab-3/latihan soal sihah.docx";
import latihan4 from "../assets/bab-4/Latihan Bahasa Arab.docx";
import latihan5 from "../assets/bab-5/latihan.pdf";
import latihan6 from "../assets/bab-6/latihan 6.pdf";

const exams = [
  {
    title: "Latihan 1",
    file: latihan1,
  },
  {
    title: "Latihan 2",
    file: latihan2,
  },
  {
    title: "Latihan 3",
    file: latihan3,
  },
  {
    title: "Latihan 4",
    file: latihan4,
  },
  {
    title: "Latihan 5",
    file: latihan5,
  },
  {
    title: "Latihan 6",
    file: latihan6,
  },
];

const LatihanPage: React.FC<NotificationProps> = () => (
  <>
    <div className="w-full max-w-3xl animate-fadeInUp p-5 py-5 mx-auto">
      <h1 className="mb-10 text-center text-3xl font-bold text-white text-shadow-md md:text-4xl">
        Latihan
      </h1>
      {exams.map((exam, index) => (
        <div key={index}>
          <h2 className="text-white font-medium mb-2">{exam.title}</h2>
          <a
            href={exam.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-transform hover:scale-105 mb-2"
          >
            Download File 📄
          </a>
        </div>
      ))}
    </div>
  </>
);

export default LatihanPage;
