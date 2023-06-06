import styles from "./Quote.module.css";

const Quote = () => (
  <div className={styles.quote}>
    <p className={styles.text}>
      “Coffee is a lot more than just a drink; it's something happening. Not as
      in hip, but like an event, a place to be, but not like a location, but
      like somewhere within yourself.”
    </p>
    <p className={styles.person}>- GERTRUDE STEIN</p>
  </div>
);

export default Quote;
