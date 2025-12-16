import React from "react";
import { FaTools } from "react-icons/fa"; // Werkzeug-Icon

const WhitelistInfo: React.FC = () => {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full text-center">
        {/* Werkzeug Icon */}
        <div className="flex justify-center mb-6">
          <FaTools className="text-black w-12 h-12" />
        </div>

        <p className="text-gray-800 mb-4">Liebe Community,</p>

        <p className="text-gray-800 mb-4">
          Wir bitten aktuell um Entschuldigung, jedoch ist dieser Bereich noch
          in Wartungsarbeiten! Das Erstellen eines Tickets um Ihre Whitelist
          anzufragen kann inzwischen auf unserem Discord gemacht werden, bis
          dieser Bereich fertig gestellt wurde. Wir bedanken uns für Ihre
          Geduld.
        </p>

        <p className="text-gray-800 font-semibold">
          Mit freundlichen Grüßen, <br /> Matze
        </p>
      </div>
    </div>
  );
};

export default WhitelistInfo;
