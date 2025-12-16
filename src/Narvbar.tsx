import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black px-6 py-4 flex items-center justify-between">
      {/* LINKS */}
      <div className="flex gap-6">
        <Link className="text-white font-semibold" to="/">
          Home
        </Link>
        <Link className="text-white font-semibold" to="/server-team">
          Server Team
        </Link>
        <Link className="text-white font-semibold" to="/content-creator">
          Content Creator
        </Link>
        <Link className="text-white font-semibold" to="/spenden">
          Spenden
        </Link>
      </div>

      {/* RECHTS: LOGIN ICON */}
      <Link
        to="/auth"
        className="text-white hover:text-green-400 transition text-xl"
        title="Login / Registrieren"
      >
        👤
      </Link>
    </nav>
  );
}
