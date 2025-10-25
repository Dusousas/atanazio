import React from "react";

export default function Main() {
  return (
    <>
      <section className="bgMain">
        <div className="maxW flex justify-between items-center h-full gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-CinzaP font-bold uppercase text-7xl">
              Atanazio Terraplanagem
            </h1>
            <p className="font-extralight mt-4 text-CinzaP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div>
              <a href="">Entrar em contato</a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img className="w-full" src="/img_2.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
