import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { PrevIcon } from "../graphics/PrevIcon";
import { NextIcon } from "../graphics/NextIcon";
import trending from "../../assets/js/trending";
import { TrendingCard } from "./TrendingCard";
import wishlist from "/assets/images/buttons/Icon/wishlist.svg";

export const TrendingCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  console.log(trending);

  return (
    <section>
      <div className="carousel">
        <div className="carousel__upper">
          <div className="carousel__title">
            <h2>Trending 2024</h2>
            <p>Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
          </div>
          <div className="carousel__buttons">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <PrevIcon />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <NextIcon />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={22}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
        >
          {trending.map((trending) => {
            return (
              <SwiperSlide key={trending.id}>
                <TrendingCard
                  imageSrc={trending.imgUrl}
                  title={trending.title}
                  subtitle={trending.activities}
                  price={trending.price}
                  discount={trending.discount}
                  duration={trending.duration}
                  rating={trending.rating}
                  ratingCount={trending.ratingCount}
                  alt={trending.alt}
                  wishlist={trending.wishlist}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
