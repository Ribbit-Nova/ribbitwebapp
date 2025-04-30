"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export default function MyCarousel() {
  const slides = [
    {
      title: "Multi-Chain Support",
      img: "slider_img/icon1.png",
    },
    {
      title: "AI-Powered Portfolio",
      img: "slider_img/icon2.png",
    },
    {
      title: "Limit order on Dex",
      img: "slider_img/icon3.png",
    },
    {
      title: "DeFi Without Complexity",
      img: "slider_img/icon4.png",
    },
    {
      title: "Loyalty Rewards",
      img: "slider_img/icon5.png",
    },
    {
      title: "Dapp Browser",
      img: "slider_img/icon6.png",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true, // Dots will be clickable
        dynamicBullets: true, // Optional: more dynamic dots
      }}
      dots="true"
      speed={1000}
      breakpoints={{
        768: {
          slidesPerView: 4,
        },
        767: {
          slidesPerView: 1,
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="card"
            style={{
              padding: 10,
              background: "#fff",
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <img
              className="card-img-top"
              src={slide.img}
              alt={slide.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
