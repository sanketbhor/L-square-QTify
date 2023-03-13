import React from "react";
import Logoimage from "../../assests/logo.png";
import Styles from "../Logo/Logo.module.css";

export default function Logo() {
  return (
    <img
      className={Styles.logo}
      src={Logoimage}
      alt="Qtify"
      width={"67px"}
      height={"34px"}
    />
  );
}
