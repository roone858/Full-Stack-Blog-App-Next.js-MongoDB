import Image from "next/image";
import styles from "./page.module.css";
import Fetchers from "@/components/Features/Features";
import Categories from "@/components/Categories/Categories";
import RecentPosts from "@/components/RecentPosts/RecentPosts";

import Pagination from "@/components/Pagination/Pagination";
import { SideMenu } from "@/components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Fetchers />
      <Categories />
      <div className={styles.homeSection}>
        <div className={styles.leftContainer}>
          <RecentPosts />

          <Pagination />
        </div>
        <div className={styles.rightContainer}>
          <SideMenu />
        </div>
      </div>
    </main>
  );
}
