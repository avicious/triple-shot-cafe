import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const formSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className={styles.newsletter}>
      <div className={styles.main}>
        <h2>Get offers straight to your inbox</h2>
        <p>Sign up for the Triple Shots Cafe newsletter.</p>
        <form onSubmit={formSubmit}>
          <input type="email" name="email" placeholder="Your email here" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
