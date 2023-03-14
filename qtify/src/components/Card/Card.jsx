import React from "react";
import Cardimg from "../../assests/cardimg.png";
import Styles from "../Card/card.module.css";

const Card = () => {
  return (
    <div className={Styles.card}>
      <div className={Styles.container}>
        <img className={Styles.image} src={Cardimg} />
        <div className={Styles.follows}>
          <p className={Styles.text}>100 Follows</p>
        </div>
      </div>
      <div className={Styles.songcategory}>New Bollywood</div>
    </div>
  );
};

export default Card;
