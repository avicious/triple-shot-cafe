import styles from "./Product.module.css";

const Product = ({ img, title, info, price }) => {
  return (
    <div className={styles.product}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p className={styles.info}>{info}</p>
      <p className={styles.price}>Price: ${price}</p>
      <button>Order Now</button>
    </div>
  );
};
export default Product;
