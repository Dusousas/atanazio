import React from "react";
import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-AmareloP py-4 border-b border-CinzaP/30">
        <div className="maxW flex justify-between items-center">
          <a className="text-CinzaP font-bold uppercase text-2xl" href="/">Atanazio</a>
          <Navbar />
        </div>
      </header>
    </>
  );
}
