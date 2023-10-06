import React from "react";
import styles from "./features.module.css";
import Image from "next/image";
const Features = () => {
  return (
    <div>
      <div className={styles.header}>
        <span className={styles.headerSpan}>Hey Mahmoud Gamal here! </span>
        Discover my stories and creative idea
      </div>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={"/culture.png"} alt="post" fill />
        </div>
        <div className={styles.postText}>
          <h3>Simple Ways to Inspire Your Inner innovator </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            maiores, id obcaecati ipsam quidem quod a excepturi delectus quas
            deleniti dolorum adipisci facilis accusamus?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
