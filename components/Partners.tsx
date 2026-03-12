"use client";

import React from "react";

const partners = [
  "RAÍZEN",
  "BALDAN AGROPECUÁRIA",
  "BRASILAGRO",
  "CITROSUCO",
  "RESORT RECANTO ALVORADA",
  "GRUPO DERKS",
  "RACEVILLE SPEED CLUB",
  "BIOBROTAS",
];

export default function Partners() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="overflow-hidden border-y-2 border-white bg-CinzaP py-20"
    >
      <div className="maxW">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-AmareloP text-sm uppercase tracking-[0.22em]">
            Parceiros
          </h3>

          <h2 className="mt-2 text-center text-4xl font-semibold uppercase tracking-wider text-white">
            Empresas que já confiaram
          </h2>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-CinzaP to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-CinzaP to-transparent" />

        <div className="marquee">
          <div className="marquee-track">
            {marqueeItems.map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="mx-10 inline-flex shrink-0 items-center text-lg font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:text-white/50 lg:text-2xl"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 26s linear infinite;
          will-change: transform;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
