import React from "react";
import Link from "next/link";
import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-AmareloP py-2 border-b border-CinzaP/30">
        <div className="maxW flex justify-between items-center">
          <Link className="" href="/">
            <img className="w-[100px]" src="/atanazio-logo.webp" alt="" />
          </Link>
          <Navbar />
        </div>
      </header>
    </>
  );
}
