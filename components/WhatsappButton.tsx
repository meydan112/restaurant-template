"use client";

import { business } from "../data/business";

export default function WhatsappButton() {
  const message = encodeURIComponent(
    "היי, אני רוצה בבקשה להזמין מקום ל"
  );

  const link = `https://wa.me/972${business.whatsapp.substring(1)}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-6 z-50"
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="w-14 h-14"
      />
    </a>
  );
}