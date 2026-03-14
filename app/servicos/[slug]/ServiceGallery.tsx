"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ServiceGalleryProps = {
  images: string[];
  title: string;
};

export default function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const totalImages = images.length;

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || totalImages === 0) return current;
      return (current - 1 + totalImages) % totalImages;
    });
  }, [totalImages]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || totalImages === 0) return current;
      return (current + 1) % totalImages;
    });
  }, [totalImages]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeModal, showNext, showPrevious]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  if (images.length === 0) {
    return (
      <div className="border border-white/8 bg-white/[0.02] px-6 py-10 text-center text-sm text-zinc-400">
        Nenhuma foto disponivel para este servico.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden border border-white/8 bg-white/[0.02] text-left"
          >
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                quality={95}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111009]/70 via-transparent to-transparent opacity-85" />
            <span className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#f8d244]/70">
              Foto {String(index + 1).padStart(2, "0")}
            </span>
            <span className="absolute right-4 top-4 border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 opacity-0 transition group-hover:opacity-100">
              Ampliar
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${title}`}
          onClick={closeModal}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-5 top-5 border border-white/25 bg-black/55 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:border-[#f8d244] hover:text-[#f8d244]"
          >
            Fechar
          </button>

          <div
            className="relative flex w-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 z-10 border border-white/25 bg-black/55 px-4 py-3 text-xl font-bold text-white transition hover:border-[#f8d244] hover:text-[#f8d244] sm:-left-14"
              aria-label="Foto anterior"
            >
              {"<"}
            </button>

            <div className="relative h-[72vh] w-full overflow-hidden border border-white/15 bg-black/40">
              <Image
                src={images[activeIndex]}
                alt={`${title} ${activeIndex + 1}`}
                fill
                sizes="92vw"
                quality={100}
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 z-10 border border-white/25 bg-black/55 px-4 py-3 text-xl font-bold text-white transition hover:border-[#f8d244] hover:text-[#f8d244] sm:-right-14"
              aria-label="Proxima foto"
            >
              {">"}
            </button>
          </div>

          <span className="absolute bottom-6 rounded border border-white/20 bg-black/45 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-zinc-200">
            {activeIndex + 1}/{totalImages}
          </span>
        </div>
      )}
    </>
  );
}
