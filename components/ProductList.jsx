import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST QUALITY FRUITS IN YOUR CITY</h1>
      <p className={styles.desc}>
      Access to variety of exotics, organics with huge choice of selections Consumer can get FRESH Vegetables & Fruits at their Doorstep.
      Our mission is to deliver fresh and quality vegetables and fruits to consumers at their doorstep without the hassle of moving around in local food markets.
      </p>
      <div className={styles.wrapper}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>                    
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </div>
    </div>
  );
};

export default ProductList;