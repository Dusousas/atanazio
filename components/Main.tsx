"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Main() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        btnRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        imgRef.current,
        {
          x: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <section id="home" className="bgMain py-20">
      <div className="maxW flex flex-col justify-between items-center h-full gap-10 lg:flex-row">
        
        <div className="lg:w-1/2">

          <h1
            ref={titleRef}
            className="text-CinzaP font-bold uppercase text-center text-4xl lg:text-left lg:text-7xl"
          >
            Atanazio Terraplanagem
          </h1>

          <p
            ref={textRef}
            className="font-extralight mt-4 text-center text-CinzaP lg:text-left"
          >
            Soluções completas em terraplanagem, infraestrutura e locação de
            máquinas para obras, propriedades rurais e grandes projetos.
          </p>

          <div className="flex mt-6 justify-center lg:justify-start">

            <a
              ref={btnRef}
              className="ctaButton"
              href=""
            >
              Entrar em contato
            </a>

          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            ref={imgRef}
            className="w-full"
            src="/img_2.png"
            alt="Máquinas de terraplanagem"
          />
        </div>

      </div>
    </section>
  );
}