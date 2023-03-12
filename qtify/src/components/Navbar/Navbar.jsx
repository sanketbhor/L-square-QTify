import React from "react";
import Logo from "../Logo/Logo";
import Feedback from "../Button/Feedback";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Feedback />
    </div>
  );
}

export default Navbar;
