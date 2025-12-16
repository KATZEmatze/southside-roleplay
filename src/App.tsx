import { Routes, Route, useNavigate } from "react-router-dom";

// Komponenten
import Navbar from "./Narvbar";
import Card from "./Card";
import Footer from "./footer";

// Seiten
import Fraktionen from "./pages/Fraktionen";
import ServerTeam from "./pages/ServerTeam";
import ContentCreator from "./pages/ContentCreator";
import Spenden from "./pages/Spenden";
import Auth from "./pages/Auth";
import WhitelistTicket from "./pages/WhitelistTicket";
import Regelwerk from "./pages/Regelwerk";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="h-20" /> {/* Abstand, z.B. für Navbar */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              {/* HERO */}
              <section className="bg-gray-200 py-20 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                  <div className="flex items-center gap-4">
                    {/* Hier kannst du Logo einfügen */}
                    <h1 className="text-4xl font-extrabold">
                      Southside Stories RP
                    </h1>
                  </div>
                  <p className="text-gray-600">
                    WO NEUE GESCHICHTEN ENTSTEHEN!
                  </p>
                </div>
              </section>

              {/* CARDS */}
              <section className="bg-darkgreen py-20 space-y-12 max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  onClick={() => navigate("/regelwerk")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Regelwerk"
                    text="Bitte lest unser Regelwerk sorgfältig durch."
                  />
                </div>

                <div
                  onClick={() => navigate("/fraktionen")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Fraktionen"
                    text="Übersicht aller staatlichen Fraktionen."
                  />
                </div>

                <div
                  onClick={() => navigate("/server-team")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Server Team"
                    text="Alle wichtigen Rollen & Ansprechpartner im Server."
                  />
                </div>

                <div
                  onClick={() => navigate("/content-creator")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Content Creator"
                    text="Hier findest du unsere Media-Creator auf Twitch, YouTube & TikTok."
                  />
                </div>

                <div
                  onClick={() => navigate("/spenden")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Spenden"
                    text="Unterstütze unser Projekt mit einer kleinen Spende."
                  />
                </div>

                <div
                  onClick={() => navigate("/whitelist-ticket")}
                  className="cursor-pointer transform hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  <Card
                    title="Whitelist Ticket"
                    text="Hier findest du Informationen, wie du aktuell deine Whitelist-Anfrage stellen kannst."
                  />
                </div>
              </section>
            </>
          }
        />

        {/* Weitere Seiten */}
        <Route path="/regelwerk" element={<Regelwerk />} />
        <Route path="/fraktionen" element={<Fraktionen />} />
        <Route path="/server-team" element={<ServerTeam />} />
        <Route path="/content-creator" element={<ContentCreator />} />
        <Route path="/spenden" element={<Spenden />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/whitelist-ticket" element={<WhitelistInfo />} />
      </Routes>
      <Footer />
    </>
  );
}
