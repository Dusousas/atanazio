"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/subc/Whatsapp";

export default function RouteShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLinksPage = pathname?.startsWith("/links");

  if (isLinksPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </>
  );
}
