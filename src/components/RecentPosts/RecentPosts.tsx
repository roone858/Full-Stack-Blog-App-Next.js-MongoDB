import React from "react";
import styles from "./recentPosts.module.css";
import Image from "next/image";
import Link from "next/link";
const RecentPosts = () => {
  return (
    <div>
      <h3 className={styles.header}>Recent Posts</h3>
      <div className={styles.postsList}>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"/culture.png"}
              alt="post"
              fill
            />
          </div>
          <div className={styles.postText}>
            <div>
              <span className={styles.date}>2020-10-20</span>
              {" - "}
              <span className={styles.slug}>Coding</span>
            </div>
            <h3>Simple Ways to Inspire Your Inner innovator </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, maiores.
            </p>

            <Link href={"/"} className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"/culture.png"}
              alt="post"
              fill
            />
          </div>
          <div className={styles.postText}>
            <div>
              <span className={styles.date}>2020-10-20</span>
              {" - "}
              <span className={styles.slug}>Coding</span>
            </div>
            <h3>Simple Ways to Inspire Your Inner innovator </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, maiores.
            </p>
            <Link href={"/"} className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"/culture.png"}
              alt="post"
              fill
            />
          </div>
          <div className={styles.postText}>
            <div>
              <span className={styles.date}>2020-10-20</span>
              {" - "}
              <span className={styles.slug}>Coding</span>
            </div>
            <h3>Simple Ways to Inspire Your Inner innovator </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, maiores.
            </p>
            <Link href={"/"} className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"/culture.png"}
              alt="post"
              fill
            />
          </div>
          <div className={styles.postText}>
            <div>
              <span className={styles.date}>2020-10-20</span>
              {" - "}
              <span className={styles.slug}>Coding</span>
            </div>
            <h3>Simple Ways to Inspire Your Inner innovator </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, maiores.
            </p>
            <Link href={"/"} className={styles.btn}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
