"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    id: "terraplanagem",
    title: "Terraplanagem",
    description:
      "Seja para preparar o solo para construções, estradas ou paisagismo, nossa terraplanagem proporciona uma base sólida para atender as necessidades dos seus projetos.",
    image: "/terraplanagem.JPEG",
  },
  {
    id: "destocas",
    title: "Destocas",
    description:
      "Remover tocos de árvores, especialmente de variedades robustas como laranja e eucalipto, pode ser um desafio. Nossa equipe experiente executa a destoca de maneira eficiente, eliminando os tocos de forma segura e completa.",
    image: "/destocas.JPEG",
  },
  {
    id: "demolicoes",
    title: "Demolições",
    description:
      "Seja uma casa residencial ou um grande barracão industrial, nossos especialistas em demolição trabalham com assertividade e segurança para derrubar estruturas indesejadas.",
    image: "/demolicoes.JPEG",
  },
  {
    id: "limpeza",
    title: "Limpeza e construção de represa",
    description:
      "Nossa equipe é especializada na limpeza e construção de represas, criando reservatórios de água confiáveis para irrigação, abastecimento ou outros fins.",
    image: "galeria/represa.JPG",
  },
  {
    id: "curvas",
    title: "Curvas",
    description:
      "Nossos serviços de curvas de níveis fornecem informações precisas sobre o relevo do seu terreno, permitindo um planejamento mais eficaz e uma construção precisa.",
    image: "/curvas.JPEG",
  },
  {
    id: "locacao-maquinas",
    title: "Locação de máquinas leves e pesadas",
    description:
      "Seja para tarefas de menor escala ou projetos complexos, oferecemos locações de uma ampla gama de máquinas bem conservadas e operacionais.",
    image: "galeria/sistematização.JPEG",
  },
];

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
                <div className="bg-CinzaP rounded-2xl p-6 h-[400px] lg:h-[400px] flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />

                  <div className="flex flex-col flex-1 mt-6 overflow-hidden">
                    <h3 className="uppercase tracking-wider font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm font-extralight mt-2 overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>

        <div className="flex mt-10 justify-center">
          <a
            className="text-CinzaP px-6 py-4 tracking-wider uppercase border-2 border-CinzaP hover:bg-CinzaP hover:text-white transition btn-cta"
            href="#contato"
          >
            Solicite um orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
