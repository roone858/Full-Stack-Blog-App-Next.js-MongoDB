import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
const NavBar = () => {
  return (
    <nav className={styles.container}>
      <SocialIcons />
      <div className={styles.logo}>lamablog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href={"/home"}>
          homepage
        </Link>
        <Link className={styles.link} href={"/contact"}>
          Contact
        </Link>
        <Link className={styles.link} href={"/about"}>
          About
        </Link>
        <AuthLinks className={styles.link} />

        <ResponsiveMenu />
      </div>
    </nav>
  );
};

export default NavBar;
