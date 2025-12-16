import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Initialer User
    supabase.auth.getUser().then((res: { data: { user: User | null }; error: any }) => {
      setUserEmail(res.data.user?.email ?? null);
    });

    // Listener für Login/Logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event: string, session: { user: User | null } | null) => {
        setUserEmail(session?.user?.email ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  // Button-Klasse für Links
  const linkButton =
    "bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition transform hover:scale-105";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO / HOME */}
        <Link to="/" className="text-xl font-bold">
          Southside RP
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-4">

          <Link to="/fraktionen" className={linkButton}>
            Fraktionen
          </Link>

          <Link to="/server-team" className={linkButton}>
            Team
          </Link>

          <Link to="/content-creator" className={linkButton}>
            Content Creator
          </Link>

          {/* Whitelist Ticket nur für eingeloggte User */}
          {userEmail && (
            <Link to="/whitelist-ticket" className={linkButton}>
              Whitelist Ticket
            </Link>
          )}

          {/* LOGIN STATUS */}
          {userEmail ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-300 hidden md:block">
                {userEmail}
              </span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth"
              className="bg-white text-black px-3 py-2 rounded-lg transition transform hover:scale-105 hover:bg-gray-200 flex items-center gap-1"
            >
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
