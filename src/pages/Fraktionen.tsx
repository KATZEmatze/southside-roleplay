import ScrollFade from "./ScrollFade";

export default function Fraktionen() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h1 className="text-3xl font-bold text-center mb-12">
            Staatliche Fraktionen
          </h1>
        </ScrollFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Los Santos Police Department", desc: "Öffentliche Sicherheit." },
            { title: "Los Santos Medical Services", desc: "Notfallrettung." },
            { title: "Auto Reparier Los Santos", desc: "Fahrzeugreparaturen." },
            { title: "Supreme Court", desc: "Höchste gerichtliche Instanz." },
          ].map((faction, index) => (
            <ScrollFade key={index} delay={index * 200}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{faction.title}</h3>
                <p className="text-gray-600">{faction.desc}</p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </div>
  );
}
