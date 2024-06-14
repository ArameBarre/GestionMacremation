import React from "react";
import styles from "./navbar.module.css";
import Links from "./links/Links";
import Image from "next/image";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.logo}>Macramé et Macération</div>
        <div className={styles.links} style={{ display: "flex", gap: "20px" }}>
          <Links />
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
