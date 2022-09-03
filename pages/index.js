import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fruits Bazar Pvt Ltd.</title>
        <meta name="description" content="Best fruits store in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <ProductList/>
    </div>
  );
}