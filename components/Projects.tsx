"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { Navigation, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PROJETOS = [
  {
    src: "/galeria/represa.webp",
    title: "Limpeza de represa",
    desc: "Limpeza de represa e barramento",
    year: "2025",
  },
  {
    src: "/galeria/destocas.webp",
    title: "Destocas",
    desc: "Destocas e limpeza de terreno para construção",
    year: "2025",
  },
  {
    src: "/galeria/sistematização.webp",
    title: "Máquinas",
    desc: "Máquinas Atanazio Terraplanagem",
    year: "2026",
  },
  {
    src: "/galeria/demolicao.webp",
    title: "Demolição",
    desc: "Demolição de estruturas",
    year: "2026",
  },
];

export default function ProjectsImmersive() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="relative overflow-hidden bg-CinzaP py-24">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              Portfolio
            </h3>
            <h2 className="text-3xl font-light text-white">Projetos Selecionados</h2>
          </div>
        </div>

        <div className="relative h-[500px] w-full lg:h-[650px]">
          <Swiper
            modules={[Navigation, Autoplay, Thumbs]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            thumbs={{
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="h-full w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl"
          >
            {PROJETOS.map((item, idx) => (
              <SwiperSlide key={item.src} className="relative group">
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-85" />

                <div className="pointer-events-none absolute left-0 bottom-0 z-10 flex h-full w-full flex-col justify-end p-8 md:w-2/3 md:p-16">
                  <span className="pointer-events-none absolute -top-10 left-10 select-none text-6xl font-bold text-white/10 md:text-8xl">
                    0{idx + 1}
                  </span>

                  <h2 className="mb-2 text-4xl font-bold leading-tight text-white md:text-6xl">
                    {item.title}
                  </h2>

                  <p className="border-l-2 border-amber-500 pl-4 text-lg font-light text-gray-300 md:text-xl">
                    {item.desc}
                    <span className="ml-2 text-sm text-white/40">| {item.year}</span>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute right-8 bottom-8 z-20 hidden w-[280px] md:block">
            <div className="rounded-xl border border-white/10 bg-black/40 p-2 backdrop-blur-md">
              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={3}
                spaceBetween={10}
                className="thumbs-swiper"
              >
                {PROJETOS.map((item) => (
                  <SwiperSlide
                    key={`thumb-${item.src}`}
                    className="!h-16 cursor-pointer overflow-hidden rounded-lg opacity-50 transition-all hover:opacity-100"
                  >
                    <img
                      src={item.src}
                      alt={`Thumbnail ${item.title}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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
