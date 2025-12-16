const factions = [
  { short: "SAFD", name: "San Andreas Fire Department" },
  { short: "SAPD", name: "San Andreas Police Department" },
  { short: "SAHP", name: "San Andreas Highway Patrol" },
];

export default function Fraktionen() {
  return (
    <div className="min-h-screen bg-darkgreen py-20 px-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Fraktionen
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {factions.map((f) => (
          <div
            key={f.short}
            className="
                bg-white rounded-2xl shadow-xl p-8 text-center
                hover:-translate-y-2 transition
              "
          >
            <h2 className="text-3xl font-bold text-darkgreen mb-2">
              {f.short}
            </h2>
            <p className="text-gray-600">{f.name}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
  {/* Auto Reparier Los Santos */}
  <div className="bg-white rounded-xl shadow-md p-6 text-center">
    <h3 className="text-xl font-semibold mb-2">
      Auto Reparier Los Santos
    </h3>
    <p className="text-gray-600">
      Zuständig für Fahrzeugreparaturen, Wartung und technische Unterstützung
      im gesamten Stadtgebiet von Los Santos.
    </p>
  </div>

  {/* Supreme Court */}
  <div className="bg-white rounded-xl shadow-md p-6 text-center">
    <h3 className="text-xl font-semibold mb-2">
      Supreme Court
    </h3>
    <p className="text-gray-600">
      Höchste gerichtliche Instanz des Staates. Verantwortlich für
      Grundsatzentscheidungen, Verfassungsfragen und Rechtsprechung.
    </p>
          </div>
        ))}
      </div>
    </div>
  );
}
