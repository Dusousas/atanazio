"use client";

import React from "react";
import type { IconType } from "react-icons";
import {
  FaTractor,
  FaWrench,
  FaTruck,
  FaWater,
  FaMountain,
  FaTools,
} from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
          className="col-start-1 row-start-1 text-white text-[clamp(28px,5vw,50px)] transition-transform duration-300 group-hover:-translate-y-1"
          aria-hidden
        />
      </div>

      <h4 className="mt-2 text-center text-white font-semibold uppercase tracking-wide">
        {title}
      </h4>
    </div>
  );
};

const LineAbout: React.FC = () => {
  const items: FeatureItemProps[] = [
    {
      number: 1,
      title: "Terraplanagem",
      Icon: FaTractor,
    },
    {
      number: 2,
      title: "Destocas",
      Icon: FaWrench,
    },
    {
      number: 3,
      title: "Demolições",
      Icon: FaTruck,
    },
    {
      number: 4,
      title: "Limpeza e construção de represa",
      Icon: FaWater,
    },
    {
      number: 5,
      title: "Curvas de nível",
      Icon: FaMountain,
    },
    {
      number: 6,
      title: "Locação de máquinas leves e pesadas",
      Icon: FaTools,
    },
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
          {items.map((item) => (
            <SwiperSlide key={item.number} className="!flex justify-center">
              <FeatureItem
                number={item.number}
                title={item.title}
                Icon={item.Icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LineAbout;
