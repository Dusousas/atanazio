import React from "react";
import { FaBuilding } from "react-icons/fa";
import LineAbout from "./subc/LineAbout";

export default function About() {
  return (
    <>
      <section className="py-20 bg-CinzaP">
        <div className="maxW flex flex-col-reverse justify-center items-center gap-15 lg:flex-row">
          <div className="lg:w-1/2">
            <img src="/about.jpg" alt="" />
          </div>

          <div className="lg:w-1/2">
            <h3 className="uppercase text-sm text-AmareloP text-center lg:text-left">Sobre nós</h3>
            <h1 className="text-2xl uppercase mt-2 text-center lg:text-left lg:text-4xl">
              Locação e serviços de máquinas pesadas
            </h1>
            <p className="font-extralight text-sm  mt-4 text-gray-300 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              distinctio doloribus? Culpa veritatis asperiores ipsam, harum
              nihil ab sit animi doloremque. Amet, quos qui eius possimus nam
              repellendus consequuntur est!
            </p>

            <div className="flex mt-8 items-center gap-4 border-b border-white/20 pb-4">
              <FaBuilding className="text-AmareloP text-3xl " />
              <div>
                <h3 className="uppercase text-sm text-AmareloP">Serviço 1</h3>
                <h2>Occupational Safety and Health Administration</h2>
              </div>
            </div>

            <div className="flex mt-4 items-center gap-4 border-b border-white/20 pb-4">
              <FaBuilding className="text-AmareloP text-3xl" />
              <div>
                <h3 className="uppercase text-sm text-AmareloP">Serviço 1</h3>
                <h2>Occupational Safety and Health Administration</h2>
              </div>
            </div>

            <div className="flex mt-4 items-center gap-4 border-b border-white/20 pb-4">
              <FaBuilding className="text-AmareloP text-3xl" />
              <div>
                <h3 className="uppercase text-sm text-AmareloP">Serviço 1</h3>
                <h2>Occupational Safety and Health Administration</h2>
              </div>
            </div>
          </div>

        </div>
          <LineAbout />

      </section>
    </>
  );
}
