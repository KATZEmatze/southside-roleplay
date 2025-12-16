// pages/Spenden.tsx
import React from "react";

const Spenden: React.FC = () => {
  return (
    <div className="flex justify-center mt-12 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl w-full text-center">
        {/* PayPal Icon */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            className="w-16 h-16"
          />
        </div>

        <h1 className="text-2xl font-bold mb-6">Spenden</h1>

        <p className="mb-4">
          Liebe Community, damit wir unser Projekt auch weiterführen können,
          benötigen wir die gewissen finanziellen Mittel um das Projekt eben
          auch richtig finanzieren zu können!
        </p>

        <p className="mb-4">
          Hier können sie uns durch, auch schon kleine Spenden reichen, helfen,
          das Projekt fortzufahren und euch den Spaß bieten zu können, den ihr
          auch von uns erwartet!
        </p>

        <p className="mb-4">
          Wir bedanken uns für jede Hilfe, und jeden Cent der durch die
          Community in das Projekt einfließt.
        </p>

        <p className="mb-6 font-semibold">Wir sagen Danke!</p>

        <p className="mb-8">
          Mit freundlichen Grüßen,
          <br />
          <strong>Matz & Jonas</strong>
        </p>

        {/* GRÜNER ANIMIERTER BUTTON */}
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=KM4R5LHKQ6WWG"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-green-600
            text-white
            font-bold
            px-8
            py-4
            rounded-full
            shadow-lg
            transform
            transition
            duration-300
            hover:bg-green-500
            hover:scale-110
            hover:shadow-2xl
            animate-pulse
          "
        >
          💚 Jetzt Spenden
        </a>
      </div>
    </div>
  );
};

export default Spenden;
