import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Importa el tipo Swiper
import activities from "../../assets/js/activitiesDB";
import { CategoryCard } from "./CategoryCard";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { PrevIcon } from "../graphics/PrevIcon";
import { NextIcon } from "../graphics/NextIcon";

export const CategoryCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section>
      <div className="carousel">
        <div className="carousel__upper">
          <div className="carousel__title">
            <h2>Select Category</h2>
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
          slidesPerView={4}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {activities.map((activity) => {
            return (
              <SwiperSlide key={activity.id}>
                <CategoryCard
                  rating={activity.rating}
                  imgUrl={activity.img_url}
                  alt={activity.alt}
                  title={activity.title}
                  activitiesNumber={activity.activitiesNumber}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
