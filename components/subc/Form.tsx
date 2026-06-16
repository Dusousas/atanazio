import React from "react";

export default function Form() {
  const inputBase =
    "w-full bg-[#454342] text-white px-3 py-2 mt-2 rounded-md border border-transparent " +
    "focus:bg-transparent focus:border-AmareloP focus:ring-2 focus:ring-AmareloP/60 " +
    "focus:outline-none transition-colors duration-200 placeholder-white/60";

  return (
    <>
      <form
        className="mt-6"
        action="https://formspree.io/f/mvzyaqwj"
        method="POST"
        acceptCharset="UTF-8"
      >
        <input type="hidden" name="subject" value="Lead - Site - {{ name }}" />
        <input type="hidden" name="tags" value="lead-site, site" />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <div className="flex gap-4 max-sm:flex-col">
          <div className="w-full">
            <label className="text-white" htmlFor="nome">Nome</label>
            <input
              className={inputBase}
              type="text"
              id="nome"
              name="name"
              autoComplete="name"
              minLength={2}
              maxLength={80}
              required
            />
          </div>
          <div className="w-full">
            <label className="text-white" htmlFor="empresa">Empresa</label>
            <input
              className={inputBase}
              type="text"
              id="empresa"
              name="company"
              autoComplete="organization"
              minLength={2}
              maxLength={120}
              required
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4 max-sm:flex-col">
          <div className="w-full">
            <label className="text-white" htmlFor="telefone">Telefone</label>
            <input
              className={inputBase}
              type="tel"
              id="telefone"
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              minLength={8}
              maxLength={20}
              pattern="^[0-9+()\s.-]{8,20}$"
              title="Informe um telefone valido com DDD."
              required
            />
          </div>
          <div className="w-full">
            <label className="text-white" htmlFor="email">Email</label>
            <input
              className={inputBase}
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              maxLength={120}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-white" htmlFor="mensagem">Mensagem</label>
          <textarea
            className={`${inputBase} resize-none`}
            rows={4}
            id="mensagem"
            name="message"
            minLength={10}
            maxLength={1000}
            spellCheck
            required
          ></textarea>
        </div>

        <div className="flex mt-4">
          <button
            type="submit"
            className="bg-AmareloP cursor-pointer text-CinzaP px-6 py-2 uppercase tracking-widest rounded-md btn-cta"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
