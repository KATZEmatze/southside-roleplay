import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      navigate("/"); // eingeloggt → Home
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Registrierung erfolgreich! Bitte prüfe dein E-Mail-Postfach.");
      setIsLogin(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Registrieren"}
        </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-3 border rounded"
        />

        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded"
        />

        <button
          onClick={isLogin ? handleLogin : handleRegister}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-500 transition"
        >
          {loading ? "Lade..." : isLogin ? "Einloggen" : "Registrieren"}
        </button>

        <p
          className="mt-4 text-center text-sm text-gray-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Noch keinen Account? Registrieren"
            : "Schon einen Account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
