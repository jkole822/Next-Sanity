// Packages
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

// Lib
import { settings } from "../lib/slick";

// Styles
import styles from "../styles/Home.module.css";

// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> Data Fetching
        </h1>

        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            <Link href="/csr">
              <a className={styles.card}>
                <h2>CSR</h2>
                <p>
                  Client-Side Rendering, this is the usual kind of data fetching
                  using useEffect, it will fetch the data from the API every
                  single page request on the client-side (after the page is
                  rendered, then the function will run).
                </p>
              </a>
            </Link>

            <Link href="/ssr">
              <a className={styles.card}>
                <h2>SSR</h2>
                <p>
                  Server-Side Rendering, will run a special function
                  (getServerSideProps) to fetch data from API every page request
                  on the server-side (before the page is loaded, that special
                  function will run first, creating a delay, then after that, it
                  will serve the page).
                </p>
              </a>
            </Link>

            <Link href="/ssg">
              <a className={styles.card}>
                <h2>SSG</h2>
                <p>
                  Static Site Generation, will run a special function
                  (getStaticProps) to fetch data once when that page builds.
                </p>
              </a>
            </Link>

            <Link href="/isr">
              <a className={styles.card}>
                <h2>ISR</h2>
                <p>
                  Incremental Static Regeneration is a combination of SSG, and
                  SSR, where the page is served statically, but at a certain
                  time and certain condition that page will rebuild and fetch
                  the data from the API again.
                </p>
                <p>
                  Important to note, initial ISR load time is slow because of
                  upload speed, and more specifically, back and forth
                  communication with the CDN.
                </p>
              </a>
            </Link>

            <Link href="/misr">
              <a className={styles.card}>
                <h2>ISR with CSR Fallback</h2>
                <p>
                  Solution found on Medium that leverages client-side rendering
                  with the NextJS Fallback feature to refresh the page on
                  initial loading to instead show client-side rendered data.
                  After the initial load, the page will be cached and served
                  statically.
                </p>
                <p>
                  Source:
                  https://medium.com/@SandeepDinesh/eliminating-next-js-isr-builds-with-client-side-rendering-2c30ee198831
                </p>
              </a>
            </Link>
          </Slider>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;