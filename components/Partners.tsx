"use client";

const partners = [
  {
    src: "/empresas/Baldan.webp",
    alt: "Baldan",
  },
  {
    src: "/empresas/biobrotas.png",
    alt: "Biobrotas",
  },
  {
    src: "/empresas/brasil-agro.png",
    alt: "Brasil Agro",
  },
  {
    src: "/empresas/citrosuco.png",
    alt: "Citrosuco",
  },
  {
    src: "/empresas/race.webp",
    alt: "Raceville Speed Club",
  },
  {
    src: "/empresas/raizen.webp",
    alt: "Raízen",
  },
  {
    src: "/empresas/recanto.png",
    alt: "Resort Recanto Alvorada",
  },
];

export default function Partners() {
  const marqueeItems = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="relative overflow-hidden border-y border-white/12 bg-CinzaP py-10 lg:py-12"
    >
      <div className="section-grid-pattern section-grid-primary section-grid-soft section-grid-fade-top" />
      <div className="section-grid-pattern section-grid-secondary section-grid-soft section-grid-fade-top" />

      <div className="relative z-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-CinzaP via-CinzaP/85 to-transparent lg:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-CinzaP via-CinzaP/85 to-transparent lg:w-32" />

        <div className="marquee py-2">
          <div className="marquee-track">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.src}-${index}`}
                className="mx-3 flex h-24 w-[190px] shrink-0 items-center justify-center rounded-[22px] border border-white/8 bg-white/[0.02] px-6 transition-transform duration-300 hover:-translate-y-1 hover:border-AmareloP/30 lg:mx-4 lg:h-28 lg:w-[220px] lg:px-8"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="max-h-12 w-full object-contain opacity-90 lg:max-h-14"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
          animation: marquee 24s linear infinite;
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
