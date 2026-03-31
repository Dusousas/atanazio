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
    alt: "Limpeza de represa",
  },
  {
    src: "/galeria/destocas.webp",
    alt: "Destocas e limpeza de terreno",
  },
  {
    src: "/galeria/sistematização.webp",
    alt: "Máquinas Atanazio Terraplanagem",
  },
  {
    src: "/galeria/demolicao.webp",
    alt: "Demolição de estruturas",
  },
];

export default function ProjectsImmersive() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="relative overflow-hidden bg-CinzaP py-12">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
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
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
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
                      alt={`Thumbnail ${item.alt}`}
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
