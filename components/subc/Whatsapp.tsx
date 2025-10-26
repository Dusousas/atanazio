import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || '';
  const href = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Fale conosco no WhatsApp"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
   >
      <FaWhatsapp size={28} />
    </a>
  );
}
