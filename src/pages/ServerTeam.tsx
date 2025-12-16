export default function ServerTeam() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* OBERER VERLAUF-STRICH */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-black to-transparent" />

        {/* INFO KÄSTCHEN */}
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center space-y-6">
          <h2 className="text-2xl font-bold">Server Team</h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
{`Liebe Community,

Ein funktionierender Server steht und fällt mit seinem Team. Das Server-Team ist dafür verantwortlich, den Alltag auf dem Server zu organisieren, Regeln durchzusetzen und für ein faires sowie angenehmes Spielerlebnis für alle zu sorgen. Ohne ein engagiertes Team wäre ein geregelter und respektvoller Umgang miteinander kaum möglich.

Zu den Aufgaben des Teams gehören unter anderem die Betreuung der Community, die Unterstützung bei Fragen oder Problemen, das Schlichten von Konflikten sowie die Weiterentwicklung des Servers. Unser Ziel ist es, eine freundliche, realistische und stabile Umgebung zu schaffen, in der sich jeder wohlfühlen kann.

Da unsere Community stetig wächst, sind wir fast immer auf der Suche nach neuen, motivierten Teammitgliedern. Frische Ideen, Engagement und Zuverlässigkeit helfen uns dabei, den Server weiter zu verbessern und langfristig auf einem hohen Niveau zu halten.

Ein starkes Team ist die Grundlage für ein gutes Miteinander. Nur durch Zusammenarbeit, Respekt und klare Strukturen können wir eine positive Atmosphäre gewährleisten – für neue Spieler ebenso wie für langjährige Mitglieder.

Mit freundlichen Grüßen,
Projektleitung & das gesamte Server Team`}
          </p>
        </div>

        {/* UNTERER VERLAUF-STRICH */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-black to-transparent" />

        {/* HIER KOMMEN DEINE ALTEN KÄSTCHEN (NUR WEITER UNTEN) */}
        <div className="grid md:grid-cols-2 gap-8 pt-10">
          {/* KÄSTCHEN 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Founder</h3>
            <p>Jonas</p>
            <p className="mt-4 font-semibold">Stellv. Founder</p>
            <p>The Beast</p>
          </div>

          {/* KÄSTCHEN 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Project Lead</h3>
            <p>Mathe & Elias</p>
            <p className="mt-4 font-semibold">Project Management</p>
            <p>Mike & Leon</p>
          </div>
        </div>

      </div>
    </div>
  );
}
