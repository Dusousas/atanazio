"use client";

import React, { JSX, useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "";
  const whatsappHref = `https://wa.me/${5514996794593}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  const navItems = useMemo(
    () => [
      { label: "Inicio", section: "home" },
      { label: "Sobre", section: "about" },
      { label: "Servicos", section: "services" },
      { label: "Perguntas Frequentes", section: "faq" },
      { label: "Contato", section: "contact" },
    ],
    []
  );

  // Trava scroll da pagina enquanto o menu mobile estiver aberto (inclui iOS).
  useEffect(() => {
    if (!isOpen) return;

    const { body, documentElement } = document;
    const scrollY = window.scrollY;

    const original = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyTouchAction: body.style.touchAction,
      htmlOverflow: documentElement.style.overflow,
      htmlOverscrollBehavior: documentElement.style.overscrollBehavior,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.touchAction = "none";
    documentElement.style.overflow = "hidden";
    documentElement.style.overscrollBehavior = "none";

    return () => {
      body.style.overflow = original.bodyOverflow;
      body.style.position = original.bodyPosition;
      body.style.top = original.bodyTop;
      body.style.width = original.bodyWidth;
      body.style.touchAction = original.bodyTouchAction;
      documentElement.style.overflow = original.htmlOverflow;
      documentElement.style.overscrollBehavior = original.htmlOverscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  // Fecha menu automaticamente ao voltar para desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Fecha menu com ESC.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (path: string, section?: string) => {
    setIsOpen(false);

    if (path && path !== window.location.pathname) {
      if (section) sessionStorage.setItem("scrollToSection", section);
      window.location.assign(path);
      return;
    }

    if (section) {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    const target = sessionStorage.getItem("scrollToSection");
    if (target) {
      sessionStorage.removeItem("scrollToSection");
      setTimeout(() => scrollToSection(target), 80);
    }
  }, []);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-6 text-md uppercase tracking-widest text-CinzaP">
          {navItems.map((item) => (
            <li key={item.section}>
              <button
                type="button"
                className="cursor-pointer uppercase transition-opacity hover:opacity-70 btn-cta"
                onClick={() => handleNavigation("/", item.section)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-panel"
          className={`relative z-50 inline-flex items-center justify-center rounded-full p-2 text-3xl text-CinzaP transition-all duration-300 btn-cta ${
            isOpen ? "bg-CinzaP text-white shadow-xl" : ""
          }`}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/45 backdrop-blur-[2px]"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          />

          <nav
            id="mobile-menu-panel"
            className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col border-l border-white/20 bg-CinzaP text-white shadow-2xl transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="px-6 pb-5 pt-7">

              <p className="mt-2 text-2xl font-semibold uppercase">Atanazio</p>
              <p className="text-sm uppercase">Terraplanagem</p>

            </div>

            <ul className="flex flex-1 flex-col gap-2 px-4 pb-4">
              {navItems.map((item, index) => (
                <li key={item.section}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm uppercase tracking-[0.15em] transition-colors hover:bg-AmareloP hover:text-CinzaP"
                    onClick={() => handleNavigation("/", item.section)}
                  >
                    <span>{item.label}</span>

                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/15 px-6 py-5">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-AmareloP px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-CinzaP transition-transform hover:-translate-y-0.5"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orcamento
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
