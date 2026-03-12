"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { services } from "@/data/services";
import "swiper/css";

export default function Services() {
  return (
    <section id="services" className="bgService py-20">
      <div className="maxW">
        <h3 className="text-CinzaP uppercase text-center font-bold tracking-wider">
          Soluções Completas
        </h3>
        <h2 className="text-center uppercase text-4xl text-CinzaP font-semibold mt-2 tracking-wider">
          Nossos serviços
        </h2>

        <article className="mt-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-CinzaP rounded-2xl p-6 h-[420px] lg:h-[420px] flex flex-col border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="flex flex-col flex-1 mt-6 overflow-hidden">
                    <h3 className="uppercase tracking-wider font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm font-extralight mt-2 overflow-hidden max-h-[96px]">
                      {item.description}
                    </p>

                    <a
                      href={`/servicos/${item.slug}`}
                      className="mt-auto pt-6 text-AmareloP uppercase tracking-[0.18em] text-xs font-semibold hover:text-white transition"
                    >
                      Ver detalhes
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>

        <div className="flex mt-10 justify-center">
          <a
            className="text-CinzaP px-6 py-4 tracking-wider uppercase border-2 border-CinzaP hover:bg-CinzaP hover:text-white transition btn-cta"
            href="#contact"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
