import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/fruits.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Fresh Fruits</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
       An apple a day keeps the doctor away
      </p>
    </div>
  );
};

export default ProductCard;