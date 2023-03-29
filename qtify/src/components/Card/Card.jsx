import { Tooltip } from "@mui/material";
import React from "react";
import Cardimg from "../../assests/image.png";
import Styles from "../Card/card.module.css";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          // <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div className={Styles.card}>
            <div className={Styles.container}>
              <img className={Styles.image} src={image} loading="lazy" />
              <div className={Styles.follows}>
                <p className={Styles.text}>{follows} Follows</p>
              </div>
            </div>
            <div className={Styles.songcategory}>
              <p>{title}</p>
            </div>
          </div>
          // </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={Styles.card}>
            <div className={Styles.container}>
              <img
                className={Styles.image}
                src={image}
                alt="song"
                loading="lazy"
              />
              <div className={Styles.follows}>
                <p className={Styles.text}>{likes} Likes</p>
              </div>
            </div>
            <div className={Styles.songcategory}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
