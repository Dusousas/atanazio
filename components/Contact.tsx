import React from "react";
import Form from "./subc/Form";
import { FaInstagramSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section id="contact" className="w-full bg-CinzaP">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29535.155968540672!2d-48.14872278969766!3d-22.281986034128206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c779b1ef54476b%3A0x53ea79d1218530bb!2sBrotas%2C%20SP%2C%2017380-000!5e0!3m2!1spt-BR!2sbr!4v1761509563284!5m2!1spt-BR!2sbr"
            className="w-full shadow-xl"
            height="350"
          ></iframe>

          <div className="maxW">
            <article className="py-20 flex flex-col justify-center items-center gap-20 lg:flex-row">
              <div className="lg:w-1/2">
                <h3 className="uppercase text-sm text-AmareloP text-center lg:text-left">
                  Sobre nós
                </h3>
                <h1 className="text-2xl text-white uppercase mt-2 text-center lg:text-left lg:text-4xl">
                  Entre em contato
                </h1>
                <p className="font-extralight text-sm  mt-4 text-gray-300 text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                  distinctio doloribus? Culpa veritatis asperiores ipsam, harum
                  nihil ab sit animi doloremque. Amet, quos qui eius possimus
                  nam repellendus consequuntur est!
                </p>
                <Form />
              </div>

              {/* ADICIONAR ENDEREÇO, EMAIÇ,, TELEFONE, REDES SOCIAIS */}
              <div className="bg-[#454342] p-10 relative lg:w-1/2">
                <h3 className="uppercase text-sm text-AmareloP mb-2">
                  SEND US A MESSAGE
                </h3>
                <h1 className="text-3xl mt-2 mb-8 text-white">
                  Don't hesitate to contact us for more information.
                </h1>

                <div className="border-t border-gray-600 pt-6">
                  {/* Head Office */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-AmareloP p-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">
                        Endereço
                      </h3>
                      <p className="text-gray-400 text-sm">Seu endereço, 123</p>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-AmareloP p-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">
                        Email
                      </h3>
                      <p className="text-gray-400 text-sm">
                        atanazio@dominio.com
                      </p>
                    </div>
                  </div>

                  {/* Let's Talk */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="bg-AmareloP p-4 flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-white">
                        Telefone
                      </h3>
                      <p className="text-gray-400 text-sm">(14) 0000-000</p>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <FaInstagramSquare className="absolute bottom-4 left-10 text-2xl text-AmareloP" />
                  <FaInstagramSquare className="absolute bottom-4 left-18 text-2xl text-AmareloP" />

                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
