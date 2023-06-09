import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h2>WHAT CUSTOMERS SAY</h2>
      <p className={styles.text}>
        "This coffee place has a cozy atmosphere and great coffee. The baristas
        are friendly and knowledgeable about their craft. Highly recommend their
        cappuccinos."
      </p>
      <p className={styles.author}>-Catherine Lipschwitz</p>
    </div>
  );
};
export default Testimonials;
