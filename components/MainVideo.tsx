"use client";

export default function MainVideo() {
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "";
  const phoneNumber = "5514996794593";

  const whatsappHref = `https://wa.me/${phoneNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-CinzaP"
    >
      {/* Vídeo */}
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/atanazio_main.mp4" type="video/mp4" />
      </video>

      {/* Glow amarelo */}
      <div className="hero-glow absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-AmareloP/20 blur-3xl" />

      {/* Overlay principal */}
      <div className="hero-overlay absolute inset-0" />

      {/* Vinheta */}
      <div className="hero-vignette absolute inset-0" />

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
        <svg
          className="absolute inset-0 h-full w-full"
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
              <circle cx="1" cy="1" r="0.65" fill="rgba(255,255,255,0.13)" />
            </pattern>
            <radialGradient id="dot-mask-grad" cx="70%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity={0} />
              <stop offset="50%" stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={0.85} />
            </radialGradient>
            <mask id="dot-mask">
              <rect width="100%" height="100%" fill="url(#dot-mask-grad)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" mask="url(#dot-mask)" />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="maxW relative z-10 w-full py-20 lg:py-28">
        <div className="max-w-4xl">


          <div className="hero-line mt-6 h-[2px] w-0 bg-AmareloP" />

          <h1 className="hero-title mt-6 max-w-3xl text-center text-4xl font-semibold uppercase leading-[0.92] text-white sm:text-5xl lg:text-left lg:text-7xl">
            Força pesada para tirar projetos do papel.
          </h1>

          <p className="hero-text mt-6 max-w-2xl text-center text-base leading-7 text-white/80 sm:text-lg lg:text-left">
            Soluções completas em terraplanagem, infraestrutura e locação de
            máquinas para obras, propriedades rurais e grandes projetos.
          </p>

          <div className="hero-actions mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:items-start">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button inline-flex min-h-14 items-center justify-center overflow-hidden bg-AmareloP px-8 text-sm font-semibold uppercase tracking-[0.24em] text-CinzaP transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(248,210,68,0.35)]"
            >
              <span className="relative z-10">Solicitar orçamento</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-video {
          transform: scale(1.14);
          opacity: 0;
          animation:
            heroVideoReveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-glow {
          opacity: 0;
          transform: translateX(-50%) scale(0.8);
          animation:
            glowIn 1.5s ease 0.2s forwards,
            glowFloat 5s ease-in-out 1.7s infinite alternate;
        }

        .hero-overlay {
          background:
            linear-gradient(
              100deg,
              rgba(10, 10, 10, 0.92) 0%,
              rgba(10, 10, 10, 0.72) 35%,
              rgba(10, 10, 10, 0.32) 68%,
              rgba(10, 10, 10, 0.18) 100%
            );
          opacity: 0;
          animation: fadeIn 1.1s ease 0.15s forwards;
        }

        .hero-vignette {
          background:
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.34) 0%,
              transparent 18%,
              transparent 82%,
              rgba(0, 0, 0, 0.48) 100%
            );
          opacity: 0;
          animation: fadeIn 1.3s ease 0.25s forwards;
        }

        .hero-badge {
          opacity: 0;
          transform: translateY(28px) scale(0.96);
          filter: blur(8px);
          animation: heroRise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
        }

        .hero-line {
          transform-origin: left center;
          animation: lineGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards;
        }

        .hero-title {
          opacity: 0;
          transform: translateY(40px) scale(0.98);
          filter: blur(14px);
          animation: heroRiseLarge 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
          text-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .hero-text {
          opacity: 0;
          transform: translateY(32px);
          filter: blur(10px);
          animation: heroRise 0.95s cubic-bezier(0.16, 1, 0.3, 1) 1.08s forwards;
        }

        .hero-actions {
          opacity: 0;
          transform: translateY(34px);
          animation: heroButtonWrap 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards;
        }

        .hero-button {
          position: relative;
          opacity: 0;
          transform: translateY(20px) scale(0.94);
          animation:
            buttonPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.35s forwards,
            buttonIdle 2.4s ease-in-out 2.4s infinite;
        }

        .hero-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.18) 25%,
            transparent 50%
          );
          transform: translateX(-140%);
          animation: shine 2.6s ease 2.2s infinite;
        }

        @keyframes heroVideoReveal {
          0% {
            opacity: 0;
            transform: scale(1.18);
          }
          100% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes glowIn {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.7);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        @keyframes glowFloat {
          from {
            transform: translateX(-50%) translateY(0px) scale(1);
          }
          to {
            transform: translateX(-50%) translateY(12px) scale(1.06);
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 4.2rem;
            opacity: 1;
          }
        }

        @keyframes heroRise {
          0% {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroRiseLarge {
          0% {
            opacity: 0;
            transform: translateY(42px) scale(0.97);
            filter: blur(14px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroButtonWrap {
          from {
            opacity: 0;
            transform: translateY(34px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonPop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.03);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes buttonIdle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-140%);
          }
          100% {
            transform: translateX(160%);
          }
        }

        @media (max-width: 1024px) {
          .hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(10, 10, 10, 0.72) 0%,
                rgba(10, 10, 10, 0.58) 40%,
                rgba(10, 10, 10, 0.82) 100%
              );
          }

          .hero-line {
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-video,
          .hero-glow,
          .hero-overlay,
          .hero-vignette,
          .hero-badge,
          .hero-line,
          .hero-title,
          .hero-text,
          .hero-actions,
          .hero-button,
          .hero-button::before {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }

          .hero-line {
            width: 4.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}