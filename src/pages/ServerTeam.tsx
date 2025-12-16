import ScrollFade from "../components/ScrollFade";

export default function ServerTeam() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <ScrollFade>
          <h1 className="text-3xl font-bold text-center mb-6">Server Team</h1>
        </ScrollFade>

        <ScrollFade delay={100}>
          <div className="border-t-4 border-black/40 mb-6" />
        </ScrollFade>

        <ScrollFade delay={200}>
          <p className="text-center text-gray-700 mb-6">
            Liebe Community,<br />
           Ein funktionierender Server steht und fällt mit seinem Team. Das Server-Team ist dafür verantwortlich, den Alltag auf dem Server zu organisieren, Regeln durchzusetzen und für ein faires sowie angenehmes Spielerlebnis für alle zu sorgen. Ohne ein engagiertes Team wäre ein geregelter und respektvoller Umgang miteinander kaum möglich.

Zu den Aufgaben des Teams gehören unter anderem die Betreuung der Community, die Unterstützung bei Fragen oder Problemen, das Schlichten von Konflikten sowie die Weiterentwicklung des Servers. Unser Ziel ist es, eine freundliche, realistische und stabile Umgebung zu schaffen, in der sich jeder wohlfühlen kann.

Da unsere Community stetig wächst, sind wir fast immer auf der Suche nach neuen, motivierten Teammitgliedern. Frische Ideen, Engagement und Zuverlässigkeit helfen uns dabei, den Server weiter zu verbessern und langfristig auf einem hohen Niveau zu halten.

Ein starkes Team ist die Grundlage für ein gutes Miteinander. Nur durch Zusammenarbeit, Respekt und klare Strukturen können wir eine positive Atmosphäre gewährleisten – für neue Spieler ebenso wie für langjährige Mitglieder.
            Mit freundlichen Grüßen,
            Projektleitung & das gesamte Server Team
          </p>
        </ScrollFade>

        <ScrollFade delay={300}>
          <div className="border-b-2 border-black/40 mb-6" />
        </ScrollFade>

        <ScrollFade delay={400}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Beispielkarten Teammitglieder */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold">Founder</h3>
              <p>Jonas</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold">Project Lead</h3>
              <p>Mathe & Elias</p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}
