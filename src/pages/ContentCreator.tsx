import ScrollFade from "./ScrollFade";

export default function ContentCreator() {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <ScrollFade>
          <h1 className="text-3xl font-bold mb-6">Content Creator</h1>
        </ScrollFade>

        <ScrollFade delay={100}>
          <p className="text-gray-700 mb-6">
            Liebe Community & Zuschauer, hier können sie alle unsere Content Creatoren finden...
          </p>
        </ScrollFade>

        <ScrollFade delay={200}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">Twitch</div>
            <div className="bg-white rounded-xl shadow-md p-6">YouTube</div>
            <div className="bg-white rounded-xl shadow-md p-6">TikTok</div>
          </div>
        </ScrollFade>

        <ScrollFade delay={400}>
          <a
            href="https://discord.gg/TR6zddbfT4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition transform hover:scale-105"
          >
            Discord
          </a>
        </ScrollFade>
      </div>
    </div>
  );
}
