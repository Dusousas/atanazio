import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-CinzaP text-white">
      <div className="maxW ">

        {/* Top row */}
        <div className="flex flex-col py-10 gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex w-fit opacity-90 transition-opacity hover:opacity-100">
              <img
                className="w-[120px]"
                src="/atanazio-logo.webp"
                alt="Atanazio Terraplanagem"
              />
            </Link>
            <p className="max-w-[260px] text-[13px] leading-6 text-white/50">
              Terraplanagem, limpeza de terrenos, demolição e serviços com máquinas.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 text-[13px] text-white/55">
            <span className="mb-2 text-[10px] uppercase tracking-[0.22em] text-AmareloP">
              Institucional
            </span>
            <Link href="/" className="transition-colors hover:text-white">
              Início
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-white">
              Fale com nossa equipe
            </Link>
            
              <a href="https://www.instagram.com/atanazioterraplanagem/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-[13px] text-white/55">
            <span className="mb-2 text-[10px] uppercase tracking-[0.22em] text-AmareloP">
              Contato
            </span>
            <span>Brotas, SP</span>
            <a href="tel:+5514996794593" className="transition-colors hover:text-white">
              (14) 99679-4593
            </a>
            
             <a href="mailto:contact@atanazioterraplanagem.com.br"
              className="break-all transition-colors hover:text-white"
            >
              contact@atanazioterraplanagem.com.br
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pb-4 flex flex-col gap-2 border-t border-white/8 pt-5 text-[12px] text-white/30 lg:flex-row lg:justify-between">
          <p>© Atanazio Terraplanagem. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            
              <a href="https://agenciayouon.com/"
              target="_blank"
              rel="noreferrer"
              className="text-AmareloP transition-opacity hover:opacity-70"
            >
              youon
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
