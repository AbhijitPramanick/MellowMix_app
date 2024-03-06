import React from "react";
import styles from "./Navbar.module.css";
import { GiMusicSpell } from "react-icons/gi";
const Navbar = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <GiMusicSpell />
      </div>
      <div className={styles.mid}>
        <p>MellowMix</p>
      </div>
      <div className={styles.right}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
