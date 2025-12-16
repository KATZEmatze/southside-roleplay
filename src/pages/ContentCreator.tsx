import React from "react";
import { FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const ContentCreator: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      {/* Textfeld + Discord */}
      {/* Textfeld + Discord */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 text-gray-800 text-center">
        <p className="mb-4">Liebe Community & Zuschauer,</p>
        <p className="mb-4">
          Hier können sie alle unsere Content Creatoren finden, und jeweils die
          Plattformen auf welchen sie streamen. Sollten sie selbst ein Teil
          unseres Media-Teams wollen werden, joinen sie gerne unserem Discord!
          Wir freuen uns, bzw. auch die CC freuen sich über jeden einzelnen
          Zuschauer!
        </p>
        <p className="font-semibold">
          Mit freundlichen Grüßen,
          <br /> Media Team
        </p>

        {/* Discord Button mit Icon */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://discord.gg/TR6zddbfT4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-500 transition"
          >
            <FaDiscord className="w-5 h-5" />
            Zum Discord
          </a>
        </div>
      </div>

      {/* Content Creator Kästen */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Twitch */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:scale-105 transition">
          <FaTwitch className="text-purple-600 w-8 h-8" />
          <div>
            <h2 className="font-bold text-lg">Twitch</h2>
          </div>
        </div>

        {/* YouTube */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:scale-105 transition">
          <FaYoutube className="text-red-600 w-8 h-8" />
          <div>
            <h2 className="font-bold text-lg">YouTube</h2>
          </div>
        </div>

        {/* TikTok */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 cursor-pointer hover:scale-105 transition">
          <SiTiktok className="text-black w-8 h-8" />
          <div>
            <h2 className="font-bold text-lg">TikTok</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;
