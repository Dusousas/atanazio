"use client";

import React, { useEffect, useRef } from "react";
import {
  FaHandshake,
  FaAward,
  FaMedal,
  FaWarehouse,
} from "react-icons/fa";
import LineAbout from "./subc/LineAbout";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(imageRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          contentRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          itemsRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className="py-20 bg-CinzaP">
        <div className="maxW flex flex-col-reverse justify-center items-center gap-15 lg:flex-row">
          <div className="lg:w-1/2">
            <img
              ref={imageRef}
              className="rounded-xl w-full"
              src="/galeria/sistematização.JPEG"
              alt="Máquinas pesadas em operação"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div ref={contentRef} className="lg:w-1/2">
            <h3 className="uppercase text-sm text-AmareloP text-center lg:text-left">
              Sobre nós
            </h3>

            <h1 className="text-2xl uppercase mt-2 text-center text-white lg:text-left lg:text-4xl">
              Locação e serviços de máquinas pesadas
            </h1>

            <p className="font-extralight text-sm mt-4 text-gray-300 text-center lg:text-left">
              Localizada em Brotas, São Paulo, a Atanazio Terraplanagem é uma
              empresa familiar que traz consigo um compromisso duradouro com a
              excelência. Desde 1997, temos sido uma força motriz na indústria
              da terraplanagem, moldando paisagens e viabilizando projetos
              ambiciosos com dedicação e maestria.
            </p>

            <div
              ref={(el) => {
                itemsRef.current[0] = el;
              }}
              className="flex mt-8 items-center gap-4 border-b border-white/20 pb-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md shrink-0">
                <FaHandshake className="text-AmareloP text-2xl" />
              </div>
              <div>
                <h3 className="uppercase text-sm text-AmareloP">
                  Satisfação do cliente
                </h3>
                <p className="text-white">
                  Nos orgulhamos de oferecer um serviço personalizado e
                  dedicado, sempre ouvindo as necessidades de nossos clientes
                  para garantir que cada projeto atenda às suas expectativas.
                </p>
              </div>
            </div>

            <div
              ref={(el) => {
                itemsRef.current[1] = el;
              }}
              className="flex mt-4 items-center gap-4 border-b border-white/20 pb-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md shrink-0">
                <FaAward className="text-AmareloP text-2xl" />
              </div>
              <div>
                <h3 className="uppercase text-sm text-AmareloP">
                  Trabalhos de qualidade
                </h3>
                <p className="text-white">
                  Cada projeto que realizamos é conduzido com precisão e
                  perfeição, graças à nossa equipe altamente capacitada e à
                  tecnologia de ponta que utilizamos.
                </p>
              </div>
            </div>

            <div
              ref={(el) => {
                itemsRef.current[2] = el;
              }}
              className="flex mt-4 items-center gap-4 border-b border-white/20 pb-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md shrink-0">
                <FaMedal className="text-AmareloP text-2xl" />
              </div>
              <div>
                <h3 className="uppercase text-sm text-AmareloP">
                  Experiência comprovada
                </h3>
                <p className="text-white">
                  Com mais de duas décadas de experiência no ramo, nos
                  destacamos como líderes indiscutíveis no campo da
                  terraplanagem.
                </p>
              </div>
            </div>

            <div
              ref={(el) => {
                itemsRef.current[3] = el;
              }}
              className="flex mt-4 items-center gap-4 border-b border-white/20 pb-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md shrink-0">
                <FaWarehouse className="text-AmareloP text-2xl" />
              </div>
              <div>
                <h3 className="uppercase text-sm text-AmareloP">
                  Maior infraestrutura
                </h3>
                <p className="text-white">
                  Nossa frota de equipamentos modernos e bem-mantidos,
                  combinada com instalações de primeira linha, nos permite
                  executar obras de qualquer escala com eficiência e precisão.
                </p>
              </div>
            </div>
          </div>
        </div>

        <LineAbout />
      </section>
    </>
  );
}
