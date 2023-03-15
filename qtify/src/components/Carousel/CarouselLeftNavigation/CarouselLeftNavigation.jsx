import React from "react";
import { useSwiper } from "swiper/react";
import swiperIcon from "../../../assests/swiperIconLeft.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      style={{
        cursor: "pointer",
        position: "absolute",
        left: "0px",
        top: "50%",
        zIndex: 10,
        transform: "translateY(-50%)",
      }}
    >
      <img style={{ width: "32px", height: "32px" }} src={swiperIcon} />
    </div>
  );
}
