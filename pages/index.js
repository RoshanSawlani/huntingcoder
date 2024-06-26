import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      
      <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.imagewrap}>
        {/* <Image className={styles.myImg} src="/homeimg.avif" alt="coder" width={237} height={158} /> */}
        <img src="/homeimg.avif" className={styles.myImg} alt="coder" width={237} height={158}/>
        </div>
        <div className={styles.center}>
          
          <h1 className={styles.title}>
            <span className="mySpan">&lt;HuntingCoder/&gt;</span>
          </h1>

        </div>
        
        <div className={styles.blogs}>
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2024?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2024?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn JavaScript in 2024?</h3>
            <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
         
        </div>

      </main>
    </div>
  );
}
