import React, { useState } from "react";

//This is the temporary DB I am using

import nextImg from "../../assets/images/home/next.svg";
import prevImg from "../../assets/images/home/prev.svg";
import { useFetchData } from "../../hooks/useFetchData";
import places from "../../assets/js/placesDB";
import { Loader } from "./Loader";

export const SearchCarousel: React.FC = () => {
  interface WeatherCondition {
    text: string;
  }

  interface WeatherCurrent {
    temp_c: number;
    condition: WeatherCondition;
  }

  interface WeatherData {
    current: WeatherCurrent;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${places[currentIndex].title}&aqi=no`;
  const { data, isLoading } = useFetchData<WeatherData>(url);

  const handleNextPrevSlide = (option: string) => {
    if ((option = "next")) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % places.length);
    }
  };

  const backgroundImage = {
    backgroundImage: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.30) 0%,
      rgba(0, 0, 0, 0.22) 100%
    ), url(${places[currentIndex].img_url})`,
  };

  return (
    <div className="search-carousel">
      <div className="search-carousel__container" style={backgroundImage}>
        <div className="search-carousel__title">
          <p className="search-carousel__title-place font-capitalize">
            {places[currentIndex].description}
          </p>
          <h1 className="search-carousel__title-country font-capitalize">
            {places[currentIndex].title}
          </h1>
        </div>
        <div className="search-carousel__description">
          <div className="search-carousel__description-climate">
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                <p>
                  {data?.current.temp_c}° C {data?.current.condition.text}
                </p>
              </div>
            )}

            <button
              className="search-carousel__button"
              onClick={() => handleNextPrevSlide("prev")}
            >
              <img src={prevImg} alt="Previous" />
            </button>
            <button
              className="search-carousel__button"
              onClick={() => handleNextPrevSlide("next")}
            >
              <img src={nextImg} alt="Next" />
            </button>
          </div>

          <div className="search-carousel__cards">
            <div className="search-carousel__cards-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64C49.6731 64 64 49.6731 64 32Z"
                  fill="white"
                />
                <path d="M16.0005 16H48.0005V48H16.0005V16Z" fill="white" />
                <path
                  d="M46.7234 22.366L26.2404 18.031C25.8227 17.9438 25.3874 18.0255 25.0297 18.2582C24.672 18.491 24.4209 18.8558 24.3314 19.273L23.9424 21.773L47.5764 26.773L47.9654 24.273C48.052 23.8556 47.97 23.4208 47.7374 23.0636C47.5047 22.7064 47.1402 22.4556 46.7234 22.366Z"
                  fill="#1D293F"
                />
                <path
                  d="M38.4954 26.022C38.4468 25.8208 38.3583 25.6313 38.2352 25.4649C38.1121 25.2984 37.9569 25.1583 37.7788 25.0527C37.6007 24.9472 37.4032 24.8785 37.1981 24.8505C36.9929 24.8226 36.7843 24.836 36.5844 24.89L32.8704 25.97L24.1154 24.03L23.1524 28.793L17.1364 30.541C16.7329 30.6703 16.395 30.9507 16.1935 31.3235C15.992 31.6963 15.9425 32.1326 16.0554 32.541L19.4454 45.333C19.4941 45.5343 19.5826 45.7237 19.7056 45.8902C19.8287 46.0567 19.9839 46.1968 20.162 46.3023C20.3402 46.4078 20.5376 46.4766 20.7428 46.5045C20.9479 46.5325 21.1566 46.519 21.3564 46.465L40.8004 40.815C41.204 40.6857 41.5419 40.4053 41.7434 40.0325C41.9449 39.6598 41.9943 39.2235 41.8814 38.815L41.2994 36.615L43.4804 37.098C43.6819 37.1384 43.8893 37.1381 44.0906 37.0972C44.292 37.0564 44.4831 36.9757 44.6529 36.8601C44.8227 36.7444 44.9677 36.596 45.0794 36.4236C45.1911 36.2512 45.2672 36.0582 45.3034 35.856L46.6834 29.029L38.8274 27.288L38.4954 26.022ZM40.7414 32.522L41.2224 30.142C41.2374 30.0589 41.2688 29.9795 41.3148 29.9087C41.3608 29.8378 41.4204 29.7768 41.4902 29.7292C41.5601 29.6816 41.6387 29.6484 41.7214 29.6316C41.8042 29.6147 41.8896 29.6145 41.9724 29.631L44.2454 30.131C44.4127 30.1731 44.5571 30.2784 44.6481 30.4249C44.7392 30.5713 44.7697 30.7474 44.7334 30.916L44.2524 33.296C44.2374 33.3792 44.206 33.4585 44.1601 33.5294C44.1141 33.6003 44.0544 33.6613 43.9846 33.7088C43.9148 33.7564 43.8362 33.7896 43.7534 33.8065C43.6706 33.8233 43.5853 33.8235 43.5024 33.807L41.2294 33.307C41.0626 33.265 40.9185 33.1599 40.8275 33.0139C40.7365 32.8679 40.7057 32.6923 40.7414 32.524V32.522ZM17.4764 31.816L22.8584 30.253L35.5584 26.563L36.9244 26.163C36.9485 26.1563 36.9734 26.1529 36.9984 26.153C37.0623 26.1552 37.1238 26.1777 37.174 26.2173C37.2242 26.2569 37.2604 26.3114 37.2774 26.373L37.4374 26.973L37.9374 28.873L17.9374 34.684L17.2744 32.184C17.2556 32.1089 17.2658 32.0295 17.3031 31.9616C17.3404 31.8937 17.4019 31.8424 17.4754 31.818L17.4764 31.816ZM40.6664 39.166C40.6869 39.2428 40.6769 39.3245 40.6384 39.394C40.6211 39.4282 40.597 39.4585 40.5676 39.4831C40.5382 39.5076 40.5041 39.526 40.4674 39.537L21.0194 45.189C20.9954 45.1961 20.9705 45.1998 20.9454 45.2C20.8815 45.1979 20.82 45.1753 20.7698 45.1358C20.7197 45.0962 20.6834 45.0416 20.6664 44.98L18.6894 37.519L38.6894 31.708L39.9094 36.308L40.6664 39.166Z"
                  fill="#1D293F"
                />
                <path
                  d="M24.5466 39.679C24.499 39.51 24.3865 39.3667 24.2336 39.2803C24.0807 39.194 23.8999 39.1716 23.7306 39.218L21.3526 39.878C21.1834 39.9254 21.04 40.0379 20.9536 40.1908C20.8672 40.3437 20.8449 40.5247 20.8916 40.694L21.5516 43.072C21.599 43.2412 21.7114 43.3846 21.8644 43.471C22.0173 43.5575 22.1983 43.5797 22.3676 43.533L24.7456 42.873C24.9146 42.8254 25.0579 42.7129 25.1443 42.56C25.2306 42.4072 25.253 42.2263 25.2066 42.057L24.5466 39.679Z"
                  fill="#1D293F"
                />
              </svg>
            </div>
            <div className="search-carousel__cards-description">
              <p>
                We Accept Payment Through <br />
                All Cards & Banking
              </p>
              <p className="font-bold font-underline">Book Now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
