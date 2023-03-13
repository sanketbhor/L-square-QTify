import React from "react";
import Styles from "../Heroimage/Heroimage.module.css";
import Heroimg from "../../assests/heroimg.png";

const Heroimage = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.herotext}>
        100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
      </p>
      <img className={Styles.Heroimage} src={Heroimg} />
    </div>
  );
};

export default Heroimage;
