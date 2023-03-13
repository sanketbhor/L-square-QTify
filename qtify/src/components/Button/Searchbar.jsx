import React from "react";
import Styles from "../Button/Searchbar.module.css";
import searchicon from "../../assests/searchicon.png";

export const Searchbar = () => {
  return (
    <div className={Styles.searchbarcontainer}>
      <input
        className={Styles.searchbar}
        type={"search"}
        placeholder={"   Search a song of your choice"}
      ></input>
      <button className={Styles.iconbox}>
        <img className={Styles.icon} src={searchicon} />
      </button>
    </div>
  );
};

export const button = () => {
  return <div>buton</div>;
};
