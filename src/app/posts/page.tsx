import { SideMenu } from "@/components/SideMenu/SideMenu";
import React from "react";
import styles from "./post.module.css";
import Image from "next/image";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.info}>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem ex
            obcaecati quia, facilis quibusdam accusamus.
          </h1>
          <div className={styles.profileInfo}>
            <Image src={"/18.png"} width={50} height={50} alt="" />
            <div>
              <div className={styles.name}>Mahmoud Gamal</div>
              <div className={styles.date}>2020.3.30</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <Image src={"/culture.png"} fill alt="" />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.left}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            aspernatur facere assumenda quam molestias vitae. Recusandae labore
            eum nam. Voluptatum accusamus nobis magni fuga numquam dolorem ab,
            suscipit est eum deserunt, minima temporibus quasi adipisci dolorum
            nisi doloribus harum, quo beatae? Voluptas doloribus odit, nostrum
            dolor officia aliquid vitae ducimus, accusantium dolore repellendus
            illobr <br />
            harum deleniti? Voluptas natus possimus eius placeat odio laboriosam
            eaque voluptatibus voluptate corrupti, culpa exercitationem.
            Excepturi ea ipsam dicta commodi. Explicabo dolor commodi minus
            vitae tempore fugit laudantium quod eligendi? Veritatis,
            <br />
            hic atque! Earum corrupti, qui reprehenderit a vel repellat dolorum
            nisi eum. Cum fuga quo placeat laudantium velit dolore quisquam
            commodi, suscipit necessitatibus. Non, officiis. Quis ea repellendus
            officia incidunt provident sit, distinctio veniam saepe iusto,
            quisquam facere quia soluta.
          </div>
          <div className={styles.commentsContainer}>
            <h3>Comments</h3>
            <div className={styles.commentInput}>

               <textarea  ></textarea> <button>SEND</button>
            </div>
            <div className={styles.comment}>
              <div className={styles.profileInfo}>
                <Image src={"/15.png"} width={40} height={40} alt="" />
                <div>
                  <div className={styles.name}>Mahmoud Gamal</div>
                  <div className={styles.date}>2020.3.30</div>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur 
              </p>
            </div>
            <div className={styles.comment}>
              <div className={styles.profileInfo}>
                <Image src={"/18.png"} width={40} height={40} alt="" />
                <div>
                  <div className={styles.name}>Mahmoud Gamal</div>
                  <div className={styles.date}>2020.3.30</div>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam cum ullam ut repudiandae dignissimos, doloribus dolores,
                nam quia dolor labore sed vel porro a, consectetur sapiente
                accusamus delectus quaerat ratione?
              </p>
            </div>{" "}
            <div className={styles.comment}>
              <div className={styles.profileInfo}>
                <Image src={"/18.png"} width={40} height={40} alt="" />
                <div>
                  <div className={styles.name}>Mahmoud Gamal</div>
                  <div className={styles.date}>2020.3.30</div>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam cum ullam ut repudiandae 
              </p>
            </div>{" "}
            <div className={styles.comment}>
              <div className={styles.profileInfo}>
                <Image src={"/18.png"} width={40} height={40} alt="" />
                <div>
                  <div className={styles.name}>Mahmoud Gamal</div>
                  <div className={styles.date}>2020.3.30</div>
                </div>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam cum ullam ut repudiandae dignissimos, doloribus dolores,
                nam quia dolor labore sed vel porro a, consectetur sapiente
                accusamus delectus quaerat ratione?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default page;
