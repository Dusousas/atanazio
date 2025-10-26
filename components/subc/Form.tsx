import React from "react";

export default function Form() {
  const inputBase =
    "w-full bg-[#454342] text-white px-3 py-2 mt-2 rounded-md border border-transparent " +
    "focus:bg-transparent focus:border-AmareloP focus:ring-2 focus:ring-AmareloP/60 " +
    "focus:outline-none transition-colors duration-200 placeholder-white/60";

  return (
    <>
      <form className="mt-6" action="">
        <div className="flex gap-4 max-sm:flex-col">
          <div className="w-full">
            <label className="text-white" htmlFor="nome">Nome</label>
            <input className={inputBase} type="text" id="nome" name="nome" />
          </div>
          <div className="w-full">
            <label className="text-white" htmlFor="empresa">Empresa</label>
            <input className={inputBase} type="text" id="empresa" name="empresa" />
          </div>
        </div>

        <div className="flex gap-4 mt-4 max-sm:flex-col">
          <div className="w-full">
            <label className="text-white" htmlFor="telefone">Telefone</label>
            <input className={inputBase} type="tel" id="telefone" name="telefone" />
          </div>
          <div className="w-full">
            <label className="text-white" htmlFor="email">Email</label>
            <input className={inputBase} type="email" id="email" name="email" />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-white" htmlFor="mensagem">Mensagem</label>
          <textarea
            className={`${inputBase} resize-none`}
            rows={4}
            id="mensagem"
            name="mensagem"
          ></textarea>
        </div>

        <div className="flex mt-4">
          <button
            type="submit"
            className="bg-AmareloP cursor-pointer text-CinzaP px-6 py-2 uppercase tracking-widest rounded-md"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
