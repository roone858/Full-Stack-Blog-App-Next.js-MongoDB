import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import AuthLinks from "../AuthLinks/AuthLinks";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu";
import SocialIcons from "../SocialIcons/SocialIcons";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <Image
              src={"/facebook.png"}
              alt="ProfilePic"
              width={30}
              height={30}
            />
          </div>
          <span className={styles.name}>Mahmoud Gamal</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit
          provident a ducimus excepturi quod quo, quisquam, ratione, accusantium
          quos omnis tenetur perferendis accusamus alias.
        </p>
        <SocialIcons />
      </div>
      <div className={styles.links}>
        <p>Links</p>

        <Link className={styles.link} href={"/"}>
          Homepage
        </Link>
        <Link className={styles.link} href={"/"}>
          Blog
        </Link>
        <Link className={styles.link} href={"/"}>
          About
        </Link>
        <Link className={styles.link} href={"/"}>
          Contact
        </Link>
      </div>
      <div className={styles.tags}>
        <p>Tags</p>
        <Link className={styles.link} href={"/"}>
          style
        </Link>
        <Link className={styles.link} href={"/"}>
          fashion
        </Link>
        <Link className={styles.link} href={"/"}>
          coding
        </Link>
        <Link className={styles.link} href={"/"}>
          travel
        </Link>
      </div>
      <div className={styles.social}>
        <p>Social</p>
        <Link className={styles.link} href={"/"}>
          facebook
        </Link>
        <Link className={styles.link} href={"/"}>
          instagram
        </Link>
        <Link className={styles.link} href={"/"}>
          Tictoc
        </Link>
        <Link className={styles.link} href={"/"}>
          youtube
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
