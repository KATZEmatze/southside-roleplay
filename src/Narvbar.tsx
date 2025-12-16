import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO / HOME */}
        <Link to="/" className="text-xl font-bold">
          Southside RP
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6">
          <Link to="/fraktionen" className="hover:text-green-400 transition">
            Fraktionen
          </Link>

          <Link to="/server-team" className="hover:text-green-400 transition">
            Team
          </Link>

          <Link to="/content-creator" className="hover:text-green-400 transition">
            Content Creator
          </Link>

          {/* LOGIN ICON (JETZT WEISS) */}
          <Link to="/auth">
            <FaUser className="text-white text-lg hover:text-green-400 transition" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
