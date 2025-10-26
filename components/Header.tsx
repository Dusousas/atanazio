import React from "react";
import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-AmareloP py-2 border-b border-CinzaP/30">
        <div className="maxW flex justify-between items-center">
          <a className="" href="/">
            <img className="w-[100px]" src="/atanazio-logo.webp" alt="" />
          </a>
          <Navbar />
        </div>
      </header>
    </>
  );
}
