"use client";

import React, { JSX, useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  // trava/destrava scroll quando o menu mobile abre
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // scroll suave para a seção, sem # na URL
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // navegação: se mudar de página, guarda seção para rolar depois
  const handleNavigation = (path: string, section?: string) => {
    setIsOpen(false);

    if (path && path !== window.location.pathname) {
      if (section) sessionStorage.setItem("scrollToSection", section);
      window.location.href = path;
    } else if (section) {
      scrollToSection(section);
    }
  };

  // ao carregar (em SPA ou após troca de página), executa o scroll pendente
  useEffect(() => {
    const target = sessionStorage.getItem("scrollToSection");
    if (target) {
      sessionStorage.removeItem("scrollToSection");
      // pequeno delay para garantir que a seção já exista no DOM
      setTimeout(() => scrollToSection(target), 80);
    }
  }, []);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6 text-md uppercase tracking-widest text-CinzaP">
          <li>
            <button
              type="button"
              className="hover:opacity-70 cursor-pointer uppercase"
              onClick={() => handleNavigation("/", "home")}
            >
              Início
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:opacity-70  uppercase cursor-pointer "
              onClick={() => handleNavigation("/", "about")}
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:opacity-70  uppercase cursor-pointer"
              onClick={() => handleNavigation("/", "services")}
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:opacity-70  uppercase cursor-pointer"
              onClick={() => handleNavigation("/", "faq")}
            >
              Perguntas Frequentes
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:opacity-70  uppercase cursor-pointer"
              onClick={() => handleNavigation("/", "contact")}
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="text-3xl text-CinzaP uppercase focus:outline-none relative z-50"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav
          className={`fixed top-0 right-0 z-40 h-screen w-full bg-white shadow-md flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-lg text-CinzaP uppercase">
            <li>
              <button
                type="button"
                className="uppercase hover:opacity-70  uppercase"
                onClick={() => handleNavigation("/", "home")}
              >
                Início
              </button>
            </li>
            <li>
              <button
                type="button"
                className="uppercase hover:opacity-70  uppercase"
                onClick={() => handleNavigation("/", "about")}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                type="button"
                className="uppercase hover:opacity-70  uppercase"
                onClick={() => handleNavigation("/", "services")}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                type="button"
                className="uppercase hover:opacity-70  uppercase"
                onClick={() => handleNavigation("/", "faq")}
              >
                Perguntas Frequentes
              </button>
            </li>
            <li>
              <button
                type="button"
                className="uppercase hover:opacity-70  uppercase"
                onClick={() => handleNavigation("/", "contact")}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
