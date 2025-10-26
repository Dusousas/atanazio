"use client";

import React from "react";
import { FaTractor, FaWrench, FaTruck, FaSeedling } from "react-icons/fa";
import type { IconType } from "react-icons";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type FeatureItemProps = {
  number: number;
  title: string;
  Icon: IconType;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, Icon }) => {
  const num = String(number).padStart(2, "0");

  return (
    <div className="group inline-flex flex-col items-center">
      <div className="inline-grid place-items-center relative">
        <span className="col-start-1 row-start-1 font-extrabold leading-none text-white/10 text-[clamp(72px,10vw,120px)] select-none">
          {num}
        </span>
        <Icon
          className="col-start-1 row-start-1 text-[clamp(28px,5vw,50px)] transition-transform duration-300 group-hover:-translate-y-1"
          aria-hidden
        />
      </div>
      <h4 className="mt-2 text-center font-semibold uppercase tracking-wide">
        {title}
      </h4>
    </div>
  );
};

const LineAbout: React.FC = () => {
  const items: FeatureItemProps[] = [
    { number: 1, title: "Locação de máquinas", Icon: FaTractor },
    { number: 2, title: "Terraplanagem", Icon: FaWrench },
    { number: 3, title: "Destocas", Icon: FaTruck },
    { number: 4, title: "Demolições", Icon: FaSeedling },
    { number: 5, title: "Limpeza e construção de represa", Icon: FaSeedling },
    { number: 6, title: "Curvas de nível", Icon: FaSeedling },

    // adicione mais itens...
  ];

  return (
    <section className="mt-10">
      <div className="maxW">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!px-2"
        >
          {items.map((it) => (
            <SwiperSlide key={it.number} className="!flex justify-center">
              <FeatureItem
                number={it.number}
                title={it.title}
                Icon={it.Icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LineAbout;
