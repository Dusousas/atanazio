import React from "react";

export default function Main() {
  return (
    <>
      <section id="home" className="bgMain py-20">
        <div className="maxW flex flex-col justify-between items-center h-full gap-10 lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="text-CinzaP font-bold uppercase text-center text-4xl lg:text-left lg:text-7xl">
              Atanazio Terraplanagem
            </h1>
            <p className="font-extralight mt-4 text-center text-CinzaP lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="flex mt-6 justify-center lg:justify-start">
              <a className="text-CinzaP  px-4 py-4 tracking-wider uppercase border-2 border-CinzaP" href="">Entrar em contato</a>
            </div>
          </div>

          <div className="lg:w-1/2 ">
            <img className="w-full" src="/img_2.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
