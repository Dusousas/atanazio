import React from "react";

export default function Main() {
  return (
    <section id="home" className="bgMain py-20">
      <div className="maxW flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="text-CinzaP text-center text-4xl font-bold uppercase lg:text-left lg:text-7xl">
            Atanazio Terraplanagem
          </h1>

          <p className="text-CinzaP mt-4 text-center font-extralight lg:text-left">
            Soluções completas em terraplanagem, infraestrutura e locação de
            máquinas para obras, propriedades rurais e grandes projetos.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <a className="ctaButton" href="#contact">
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            className="w-full"
            src="/img_2.png"
            alt="Máquinas de terraplanagem"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}