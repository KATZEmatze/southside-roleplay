import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
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

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <Link to="/" className="text-xl font-bold">
          Southside RP
        </Link>

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

          {userEmail && (
            <Link
              to="/whitelist-ticket"
              className="hover:text-green-400 transition font-semibold"
            >
              Whitelist Ticket
            </Link>
          )}

          {userEmail ? (
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-300 hidden md:block">
                Eingeloggt als {userEmail}
              </span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <FaUser className="text-white text-lg hover:text-green-400 transition" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
