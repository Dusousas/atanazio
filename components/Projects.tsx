"use client";

import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";

// Estilos do Swiper (necessários)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const IMAGENS: { src: string; alt: string }[] = [
  { src: "/galeria/galeria-01.webp", alt: "Projeto 1" },
  { src: "/galeria/galeria-01.webp", alt: "Projeto 2" },
  { src: "/galeria/galeria-01.webp", alt: "Projeto 3" },
  { src: "/galeria/galeria-01.webp", alt: "Projeto 4" },
  { src: "/galeria/galeria-01.webp", alt: "Projeto 5" },
  { src: "/galeria/galeria-01.webp", alt: "Projeto 6" },
];

export default function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <section className="py-20 bg-CinzaP">
      <div className="maxW flex justify-center">
        <div className="w-full max-w-[700px]">
          <h3 className="text-white uppercase text-center tracking-wider">
            Confira nossas fotos
          </h3>
          <h2 className="text-center uppercase text-3xl text-white font-semibold mt-2 tracking-wider">
            Nossos projetos mais recentes:
          </h2>

          {/* Swiper principal */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard, Thumbs]}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            keyboard={{ enabled: true }}
            loop={IMAGENS.length > 1}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="rounded-lg overflow-hidden mt-10"
            onSwiper={(swiper) => {
              // Garante que o swiper está inicializado
              if (swiper) swiper.update();
            }}
          >
            {IMAGENS.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="aspect-video w-full bg-black/5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs */}
          <div className="mt-4">
            <Swiper
              modules={[FreeMode, Thumbs]}
              onSwiper={(swiper) => {
                // Garante que está montado antes de setar
                if (swiper && !swiper.destroyed) {
                  setThumbsSwiper(swiper);
                }
              }}
              watchSlidesProgress
              freeMode
              slidesPerView={4}
              spaceBetween={12}
              className="select-none"
            >
              {IMAGENS.map((img, idx) => (
                <SwiperSlide key={idx} className="cursor-pointer">
                  <div className="aspect-video w-full overflow-hidden rounded-md border border-black/10">
                    <img
                      src={img.src}
                      alt={`Thumb ${img.alt}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <a
          className="text-white  px-4 py-4 tracking-wider uppercase border-2 border-white"
          href=""
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
