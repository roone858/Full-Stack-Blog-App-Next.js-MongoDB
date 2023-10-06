import React from "react";
import styles from "./sideCategories.module.css"
const SideCategories = () => {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.hint}>Discover by topics</span>
        <h3 className={styles.title}>Categories</h3>
      </div>
      <div className={styles.categoryContainer}>
        <span className={styles.span + " " + styles.coding}>Coding</span>
        <span className={styles.span + " " + styles.fashion}>Fashion</span>
        <span className={styles.span + " " + styles.travel}>Travel</span>
        <span className={styles.span + " " + styles.style}>Style</span>
        <span className={styles.span + " " + styles.food}>Food</span>
        <span className={styles.span + " " + styles.culture}>Culture</span>
      </div>
    </div>
  );
};

export default SideCategories;
