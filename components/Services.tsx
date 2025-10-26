"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    id: "locacao",
    title: "Locação de Máquinas",
    description:
      "Soluções de locação flexíveis para suas obras, com suporte especializado.",
    image: "/about.jpg",
  },
  {
    id: "terraplanagem",
    title: "Terraplanagem e Obras",
    description:
      "Execução completa com equipe qualificada e equipamentos de qualidade.",
    image: "/about.jpg",
  },
  {
    id: "transporte-1",
    title: "Transporte e Logística",
    description: "Movimentação segura e eficiente de materiais e maquinários.",
    image: "/about.jpg",
  },
  {
    id: "transporte-2",
    title: "Transporte e Logística",
    description: "Movimentação segura e eficiente de materiais e maquinários.",
    image: "/about.jpg",
  },
];

export default function Services() {
  return (
    <>
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
                  <div className="bg-CinzaP rounded-2xl p-6 h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-xl"
                    />
                    <h3 className="mt-6 uppercase tracking-wider font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-extralight mt-2">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>

          <div className="flex mt-10 justify-center">
            <a
              className="text-CinzaP  px-4 py-4 tracking-wider uppercase border-2 border-CinzaP"
              href=""
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
