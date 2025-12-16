import ScrollFade from "../ScrollFade";

export default function Fraktionen() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-12">
          Staatliche Fraktionen
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <ScrollFade>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Los Santos Police Department</h3>
              <p className="text-gray-600">
                Zuständig für die öffentliche Sicherheit und Ordnung.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={100}>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Los Santos Medical Services</h3>
              <p className="text-gray-600">
                Medizinische Versorgung und Notfallrettung.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={200}>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Auto Reparier Los Santos</h3>
              <p className="text-gray-600">
                Fahrzeugreparaturen, Wartung und technische Hilfe.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={300}>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Supreme Court</h3>
              <p className="text-gray-600">
                Höchste gerichtliche Instanz des Staates.
              </p>
            </div>
          </ScrollFade>

        </div>
      </div>
    </div>
  );
}
