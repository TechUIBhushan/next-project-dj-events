import { useRouter } from "next/router";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "../styles/Layout.module.css";
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "DJ Events Party",
  description: "Find the latest DJ events and others",
  keywords: "Music, DJ, LDM",
};
