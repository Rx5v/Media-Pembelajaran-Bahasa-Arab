import React from "react";

const teamMembers = [
  { name: "Aisyah Jihan Nabila", id: "(223121102)" },
  { name: "Isnaini Leli Nur Baiti", id: "(223121103)" },
  { name: "Hanifah Alfi Syafira", id: "(223121106)" },
];

const TeamPage: React.FC = () => {
  return (
    <div className="flex flex-1 animate-fadeInUp flex-col items-center justify-center p-10">
      <h1 className="mb-12 text-center text-3xl font-bold text-white text-shadow-md md:text-6xl">
        TEAM DEVELOPMENT
      </h1>
      <div className="w-full max-w-md space-y-6">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="w-full rounded-2xl border-2 border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:shadow-2xl"
          >
            <div className="text-2xl font-bold text-white">{member.name}</div>
            <div className="mt-1 text-xl font-semibold text-cyan-400">
              {member.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
