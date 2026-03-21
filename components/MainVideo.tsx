"use client";

export default function MainVideo() {
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "";
  const whatsappHref = `https://wa.me/${5514996794593}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-CinzaP"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/atanazio_main.mp4" type="video/mp4" />
      </video>

      {/* Radial amarelo no topo — mantido */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,210,68,0.22),_transparent_40%)]" />

      {/* Gradiente escuro — só na esquerda, direita bem mais aberta */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,16,16,0.85)_0%,rgba(16,16,16,0.60)_35%,rgba(16,16,16,0.20)_65%,rgba(16,16,16,0.10)_100%)]" />

      {/* Vinheta sutil nas bordas superior e inferior */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,16,16,0.35)_0%,transparent_20%,transparent_80%,rgba(16,16,16,0.45)_100%)]" />

      {/* Overlay — pontilhado grain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.65" fill="rgba(255,255,255,0.15)" />
            </pattern>
            <radialGradient id="dot-mask-grad" cx="65%" cy="50%" r="65%">
              <stop offset="0%"   stopColor="white" stopOpacity={0} />
              <stop offset="45%"  stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={0.9} />
            </radialGradient>
            <mask id="dot-mask">
              <rect width="100%" height="100%" fill="url(#dot-mask-grad)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dot-mask)" />
        </svg>
      </div>

      <div className="maxW relative z-10 w-full py-20 lg:py-28">
        <div className="max-w-4xl">
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold uppercase leading-[0.95] text-white text-center lg:text-left sm:text-5xl lg:text-6xl">
            Força pesada para tirar projetos do papel.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 text-center lg:text-left sm:text-lg">
            Soluções completas em terraplanagem, infraestrutura e locação de máquinas para obras, propriedades rurais e grandes projetos.
          </p>

          <div className="mt-10 flex flex-col items-center lg:items-start gap-4 sm:flex-row sm:items-center">
            
            <a  href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center bg-AmareloP px-8 text-sm font-semibold uppercase tracking-[0.24em] text-CinzaP transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(248,210,68,0.28)]"
            >
              Solicitar orcamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}