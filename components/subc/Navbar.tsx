import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex gap-4 text-CinzaP uppercase">
          <li><a href="">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#faq">Perguntas Frequentes</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </>
  );
}
