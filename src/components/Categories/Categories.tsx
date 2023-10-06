import React from "react";
import styles from "./categories.module.css";
import Image from "next/image";
const Categories = () => {
  return (
    <div>
      <h3 className={styles.header}>Popular Categories</h3>
      <div className={styles.categoriesList}>
        <div className={styles.category + " " + styles.fashion}>
          <div className={styles.imageContainer}>
            <Image src={"/fashion.png"} alt="fashion" fill />
          </div>
          <span>Fashion</span>
        </div>
        <div className={styles.category + " " + styles.food}>
          <div className={styles.imageContainer}>
            <Image src={"/food.png"} alt="food" fill />
          </div>
          <span>Food</span>
        </div>
        <div className={styles.category + " " + styles.coding}>
          <div className={styles.imageContainer}>
            <Image src={"/coding.png"} alt="coding" fill />
          </div>
          <span>Coding</span>
        </div>
        <div className={styles.category + " " + styles.style}>
          <div className={styles.imageContainer}>
            <Image src={"/style.png"} alt="style" fill />
          </div>
          <span>Style</span>
        </div>
        <div className={styles.category + " " + styles.travel}>
          <div className={styles.imageContainer}>
            <Image src={"/travel.png"} alt="travel" fill />
          </div>
          <span>Travel</span>
        </div>
        <div className={styles.category + " " + styles.culture}>
          <div className={styles.imageContainer}>
            <Image src={"/culture.png"} alt="culture" fill />
          </div>
          <span>Culture</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
