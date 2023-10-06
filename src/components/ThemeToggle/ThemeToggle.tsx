"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <div className={styles.toggleContainer} onClick={changeTheme}>
      <Image src={"/moon.png"} width={14} height={14} alt="toggle" />
      <div
        className={styles.ball}
        style={theme == "Dark" ? { left: 0 } : { right: 0 }}
      ></div>
      <Image src={"/sun.png"} width={14} height={14} alt="toggle" />
    </div>
  );
};

export default ThemeToggle;
