"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { services } from "@/data/services";
import "swiper/css";
import { FaArrowLeft } from "react-icons/fa";

export default function Services() {
  const swiperRef = useRef<SwiperType | null>(null);

  const goToPreviousSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section id="services" className="bgService py-20">
      <div className="maxW relative">
        <h3 className="text-CinzaP uppercase text-center font-bold tracking-wider">
          Soluções Completas
        </h3>
        <h2 className="text-center uppercase text-4xl text-CinzaP font-semibold mt-2 tracking-wider">
          Nossos serviços
        </h2>

        <div className="mt-8 flex justify-center md:absolute md:right-4 md:justify-end lg:-mt-0">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={goToPreviousSlide}
              aria-label="Voltar para o servico anterior"
              className="h-10 w-10 border border-CinzaP flex justify-center items-center rounded-full cursor-pointer transition hover:bg-CinzaP group"
            >
              <FaArrowLeft className="text-CinzaP transition group-hover:text-white" />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Ir para o proximo servico"
              className="h-10 w-10 border border-CinzaP flex justify-center items-center rounded-full cursor-pointer transition hover:bg-CinzaP group"
            >
              <FaArrowLeft className="rotate-180 text-CinzaP transition group-hover:text-white" />
            </button>
          </div>
        </div>

        <article className="mt-12 md:mt-20">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-CinzaP rounded-2xl p-6 h-[390px] md:h-[420px] lg:h-[420px] flex flex-col border border-white/10">
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
            href="https://api.whatsapp.com/send/?phone=5514996794593&text=Ol%C3%A1+gostaria+de+algumas+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
