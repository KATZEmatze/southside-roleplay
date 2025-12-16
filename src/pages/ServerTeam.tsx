// pages/ServerTeam.tsx
import React from "react";

const ServerTeam: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {/* Kästchen 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md w-64 text-center">
        <h2 className="font-bold text-lg mb-2">Founder</h2>
        <p>Jonas</p>
        <h3 className="font-semibold mt-4">Stellv. Founder</h3>
        <p>The Beast</p>
      </div>

      {/* Kästchen 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md w-64 text-center">
        <h2 className="font-bold text-lg mb-2">Project Lead</h2>
        <p>Matze & Elias</p>
        <h3 className="font-semibold mt-4">Project Management</h3>
        <p>Mike & Leon</p>
      </div>
    </div>
  );
};

export default ServerTeam;
