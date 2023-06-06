import styles from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () =>  (
    <div className={styles.error}>
      <p>
        Sorry, we couldn't find what you were looking for, try going back home.
      </p>
      <Link to="/">Go back Home</Link>
    </div>
  );
export default Error;
