import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

//components
import Layout from "@/components/layout";

// utils
import { getAllPosts } from "@/utils/posts";
import Card from "@/components/card";

export default function Home({ postData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Layout>
          <h1>Hello</h1>
          {/* <div className={styles.imageHome}>
            <Image src={"/images/wolf.jpeg"} fill alt={"wolf"} />
          </div> */}
          <p>Gli articoli del blog</p>
          <div className={styles.Card__wrapper}>
            {postData?.map((post, index) => (
              <Card key={index} post={post} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}

export const getStaticProps = () => {
  const postData = getAllPosts();

  return {
    props: {
      postData,
    },
  };
};
