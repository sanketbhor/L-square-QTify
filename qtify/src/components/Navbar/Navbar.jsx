import React from "react";
import Logo from "../Logo/Logo";
import Feedback from "../Button/Button";
import styles from "./Navbar.module.css";
import { Searchbar } from "../Button/Searchbar";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Searchbar />
      <Feedback />
    </div>
  );
}

export default Navbar;
