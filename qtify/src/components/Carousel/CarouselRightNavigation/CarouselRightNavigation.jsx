import React from "react";
import { useSwiper } from "swiper/react";
import swiperIcon from "../../../assests/swiperIconRight.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
      }}
      style={{
        cursor: "pointer",
        position: "absolute",
        right: "0px",
        top: "50%",
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img style={{ width: "32px", height: "32px" }} src={swiperIcon} />
    </div>
  );
}
