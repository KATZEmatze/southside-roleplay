import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import ScrollFade from "../components/ScrollFade";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO */}
      <section className="bg-gray-200 py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <ScrollFade>
            <h1 className="text-4xl font-extrabold mb-4">
              Southside Stories RP
            </h1>
          </ScrollFade>

          <ScrollFade delay={200}>
            <p className="text-gray-600">
              WO NEUE GESCHICHTEN ENTSTEHEN!
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-darkgreen py-20 space-y-12">
        <ScrollFade>
          <div onClick={() => navigate("/regelwerk")} className="cursor-pointer">
            <Card
              title="Regelwerk"
              text="Bitte lest unser Regelwerk sorgfältig durch."
            />
          </div>
        </ScrollFade>

        <ScrollFade delay={200}>
          <div onClick={() => navigate("/fraktionen")} className="cursor-pointer">
            <Card
              title="Fraktionen"
              text="Übersicht aller staatlichen Fraktionen."
            />
          </div>
        </ScrollFade>

        <ScrollFade delay={400}>
          <div onClick={() => navigate("/whitelist-ticket")} className="cursor-pointer">
            <Card
              title="Whitelist Ticket"
              text="Hier kannst du ein Ticket erstellen (nur eingeloggte Spieler)."
            />
          </div>
        </ScrollFade>
      </section>
    </div>
  );
}
