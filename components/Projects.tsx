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
    src: "/galeriahome/FIMI0172.JPEG",
    alt: "Galeria Atanazio 1",
  },
  {
    src: "/galeriahome/FIMI0343.JPEG",
    alt: "Galeria Atanazio 2",
  },
  {
    src: "/galeriahome/FIMI0372.JPEG",
    alt: "Galeria Atanazio 3",
  },
  {
    src: "/galeriahome/IMG_0121.JPEG",
    alt: "Galeria Atanazio 4",
  },
  {
    src: "/galeriahome/IMG_2756.JPEG",
    alt: "Galeria Atanazio 5",
  },
  {
    src: "/galeriahome/IMG_6144.JPEG",
    alt: "Galeria Atanazio 6",
  },
];

export default function ProjectsImmersive() {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="relative overflow-hidden bg-CinzaP py-12">
      <div className="section-grid-pattern section-grid-primary section-grid-fade-right" />
      <div className="section-grid-pattern section-grid-secondary section-grid-fade-right" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="relative h-[500px] w-full lg:h-[650px]">
          <Swiper
            onSwiper={setMainSwiper}
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
            <button
              type="button"
              onClick={() => thumbsSwiper?.slidePrev()}
              className="absolute top-1/2 -left-3 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-AmareloP/60 bg-black/75 text-AmareloP shadow-lg shadow-black/35 transition-all hover:scale-105 hover:border-AmareloP hover:bg-black/90"
              aria-label="Ver miniatura anterior"
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.5 5.5L7 10l4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => thumbsSwiper?.slideNext()}
              className="absolute top-1/2 -right-3 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-AmareloP/60 bg-black/75 text-AmareloP shadow-lg shadow-black/35 transition-all hover:scale-105 hover:border-AmareloP hover:bg-black/90"
              aria-label="Ver próxima miniatura"
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8.5 5.5L13 10l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative rounded-xl border border-white/10 bg-black/40 p-2 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-y-2 left-0 w-10 rounded-l-xl bg-gradient-to-r from-black/35 to-transparent" />
              <div className="pointer-events-none absolute inset-y-2 right-0 w-10 rounded-r-xl bg-gradient-to-l from-black/35 to-transparent" />

              <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                watchSlidesProgress
                slideToClickedSlide
                slidesPerView={3}
                spaceBetween={10}
                className="thumbs-swiper"
              >
                {PROJETOS.map((item, idx) => (
                  <SwiperSlide
                    key={`thumb-${item.src}`}
                    className="!h-16 cursor-pointer overflow-hidden rounded-lg opacity-50 transition-all hover:opacity-100"
                    onClick={() => mainSwiper?.slideToLoop(idx)}
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
