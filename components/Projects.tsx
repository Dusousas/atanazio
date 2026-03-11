"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import {
  Navigation,
  Autoplay,
  Thumbs,
  EffectCreative, // Efeito criativo para transições modernas
  Controller,
} from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";

gsap.registerPlugin(ScrollTrigger);

// Adicionei dados extras para simular conteúdo diferente por slide
const PROJETOS = [
  {
    src: "/galeria/represa.JPG",
    title: "Limpeza de represa",
    desc: "Limpeza de represa e Barramento",
    year: "2025",
  },
  {
    src: "/galeria/destocas.JPEG",
    title: "Destocas",
    desc: "Destocas e limpeza de terreno para construção",
    year: "2025",
  },
  {
    src: "/galeria/sistematização.JPEG",
    title: "Maquinas",
    desc: "Maquinas Atanazio Terraplanagem",
    year: "2026",
  },
    {
    src: "/galeria/demolicao.JPEG",
    title: "Demolição",
    desc: "Demolição de estruturas",
    year: "2026",
  },

];

export default function ProjectsImmersive() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // Animação de Entrada da Seção (ScrollTrigger)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".reveal-container", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  // Função para animar o texto quando o slide muda
  const handleSlideChange = (swiper: SwiperClass) => {
    const activeIndex = swiper.realIndex;

    // Reseta e anima o título atual
    if (titleRefs.current[activeIndex]) {
      gsap.fromTo(
        titleRefs.current[activeIndex],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
    // Reseta e anima a descrição atual
    if (descRefs.current[activeIndex]) {
      gsap.fromTo(
        descRefs.current[activeIndex],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );
    }
  };

  return (
    <section
      ref={containerRef}
      className="py-24 bg-CinzaP relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 reveal-container">
        
        {/* Cabeçalho minimalista */}
        <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-amber-500 uppercase tracking-[0.2em] text-xs font-bold mb-2">
              Portfolio
            </h3>
            <h2 className="text-white text-3xl font-light">
              Projetos Selecionados
            </h2>
          </div>

        </div>

        <div className="relative w-full h-[500px] lg:h-[650px]">
          {/* Swiper Principal */}
          <Swiper
            modules={[Navigation, Autoplay, Thumbs, EffectCreative, Controller]}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={handleSlideChange}
            className="h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-zinc-900"
          >
            {PROJETOS.map((item, idx) => (
              <SwiperSlide key={idx} className="relative group">
                {/* Imagem de Fundo */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-[.swiper-slide-active]:scale-110"
                />
                
                {/* Overlay Escuro (Gradiente) para leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                {/* Conteúdo Flutuante Sobre a Imagem */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 flex flex-col justify-end h-full z-10 pointer-events-none">
                  <span className="text-white/50 text-6xl md:text-8xl font-bold opacity-10 absolute -top-10 left-10 select-none">
                    0{idx + 1}
                  </span>
                  
                  <div className="overflow-hidden">
                    <h2
                      ref={(el) => { titleRefs.current[idx] = el }}
                      className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight"
                    >
                      {item.title}
                    </h2>
                  </div>
                  
                  <div className="overflow-hidden">
                    <p
                      ref={(el) => { descRefs.current[idx] = el }}
                      className="text-lg md:text-xl text-gray-300 font-light border-l-2 border-amber-500 pl-4"
                    >
                      {item.desc} <span className="text-white/40 text-sm ml-2">| {item.year}</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs Flutuantes (Bottom Right) */}
          <div className="absolute bottom-8 right-8 z-20 w-[280px] hidden md:block">
             <div className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={3}
                spaceBetween={10}
                className="thumbs-swiper"
              >
                {PROJETOS.map((item, idx) => (
                  <SwiperSlide key={idx} className="cursor-pointer !h-16 rounded-lg overflow-hidden opacity-40 transition-all hover:opacity-100 ui-selected:opacity-100 ui-selected:ring-2 ui-selected:ring-amber-500">
                    <img
                      src={item.src}
                      alt="thumb"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          {/* Botão Mobile (caso não caiba os thumbs) */}
          <div className="absolute bottom-6 right-6 md:hidden z-20">
             <div className="flex gap-2">
                {/* Você pode adicionar botões de navegação manuais aqui se quiser */}
             </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .swiper-slide-thumb-active {
          opacity: 1 !important;
          border: 2px solid #f59e0b;
        }
      `}</style>
    </section>
  );
}