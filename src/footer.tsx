import React from "react";
import { FaDiscord } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full mt-12">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <p>Southside Roleplay | Hardcore RP &copy;</p>
        <p>Website erstellt durch Matze [PROJECT-LEAD]</p>
        <p className="flex justify-center items-center gap-2">
          <FaDiscord className="w-5 h-5" />
          <a
            href="https://discord.gg/TR6zddbfT4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Discord
          </a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:Matze.lasrp@gmail.com" className="hover:underline">
            Matze.lasrp@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
