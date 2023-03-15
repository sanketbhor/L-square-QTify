import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

export default function Carousel({ data, renderComponent }) {
  return (
    <Swiper
      grabCursor
      spaceBetween={40}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      {data.map((ele) => (
        <SwiperSlide>{renderComponent(ele)} </SwiperSlide>
      ))}
    </Swiper>
  );
}
