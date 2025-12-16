type CardProps = {
  title: string;
  text: string;
};

export default function Card({ title, text }: CardProps) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-lg p-8 text-center max-w-xl mx-auto
        transform transition hover:-translate-y-2 hover:shadow-2xl
      "
    >
      <h2 className="text-2xl font-bold text-darkgreen mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{text}</p>

      <button className="bg-darkgreen text-white px-6 py-2 rounded-full hover:scale-105 transition">
        READ MORE
      </button>
    </div>
  );
}
