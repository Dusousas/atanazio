"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const marqueeItems = [...partners, ...partners];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="overflow-hidden bg-CinzaP py-20 border-y-2 border-white"
    >
      <div className="maxW">
        <div ref={titleRef} className="mx-auto max-w-4xl text-center">
          <h3 className="text-sm uppercase tracking-[0.22em] text-AmareloP">
            Parceiros
          </h3>

          <h2 className="text-center uppercase text-4xl text-white font-semibold mt-2 tracking-wider">
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
                className="inline-flex shrink-0 items-center mx-10 text-lg font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:text-white/50 lg:text-2xl"
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
