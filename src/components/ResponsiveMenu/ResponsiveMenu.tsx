"use client";
import { useContext, useState } from "react";
import styles from "./responsiveButton.module.css";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={styles.resButton} onClick={() => setOpen(!open)}>
        <div
          className={theme == "Light" ? styles.darkLine : styles.lightLine}
        ></div>
        <div
          className={theme == "Light" ? styles.darkLine : styles.lightLine}
        ></div>
        <div
          className={theme == "Light" ? styles.darkLine : styles.lightLine}
        ></div>
      </div>
      {open && (
        <div className={styles.list}>
          <Link className={styles.link} href={"/"}>
            Home
          </Link>
          <Link className={styles.link} href={"/contact"}>
            Contact
          </Link>
          <Link className={styles.link} href={"/about"}>
            About
          </Link>
        </div>
      )}
    </>
  );
};

export default ResponsiveMenu;
