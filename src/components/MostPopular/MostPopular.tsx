import React from "react";
import styles from "./mostPopular.module.css";
import Image from "next/image";
const MostPopular = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.hint}>What{"'"}s hot</span>
        <h3 className={styles.title}>Most Popular</h3>
      </div>
      <div className={styles.card}>
        

        <div className={styles.docs}>
          <span className={styles.span + " " + styles.fashion}>Fashion</span>
          <p className={styles.text}>
            {" "}
            A Journo Through Bohemian Beauty : Exploring the Streets of Prague
          </p>
          <div>
            <span className={styles.name}>Joseph Owen</span>
            {" - "}
            <span className={styles.date}>22-3-2023</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        

        <div className={styles.docs}>
          <span className={styles.span + " " + styles.style}>style</span>
          <p className={styles.text}>
            {" "}
            A Journo Through Bohemian Beauty : Exploring the Streets of Prague
          </p>
          <div>
            <span className={styles.name}>Joseph Owen</span>
            {" - "}
            <span className={styles.date}>22-3-2023</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        

        <div className={styles.docs}>
          <span className={styles.span + " " + styles.coding}>coding</span>
          <p className={styles.text}>
            {" "}
            A Journo Through Bohemian Beauty : Exploring the Streets of Prague
          </p>
          <div>
            <span className={styles.name}>Joseph Owen</span>
            {" - "}
            <span className={styles.date}>22-3-2023</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        

        <div className={styles.docs}>
          <span className={styles.span + " " + styles.travel}>travel</span>
          <p className={styles.text}>
            {" "}
            A Journo Through Bohemian Beauty : Exploring the Streets of Prague
          </p>
          <div>
            <span className={styles.name}>Joseph Owen</span>
            {" - "}
            <span className={styles.date}>22-3-2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
