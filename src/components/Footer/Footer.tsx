import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
const Footer = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.social}>
        <Image
          src={"/facebook.png"}
          width={20}
          height={20}
          alt="social media icon"
        />
        <Image
          src={"/instagram.png"}
          width={20}
          height={20}
          alt="social media icon"
        />
        <Image
          src={"/twitter.png"}
          width={20}
          height={20}
          alt="social media icon"
        />
        <Image
          src={"/youtube.png"}
          width={20}
          height={20}
          alt="social media icon"
        />
      </div>
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
        <AuthLinks className={styles.link}/>
   
        <ResponsiveMenu/>
      </div>
    </nav>
  );
};

export default Footer;
