import styles from "./Hero.module.css";
import {
  bannerCoffeeBag,
  bannerCoffeeBeansLeft,
  bannerCoffeeBeansRight,
  bannerCup,
  bannerDonut,
  bannerLeafLeft,
  bannerLeafRight,
} from "../assets";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.main}>
      <h1>Experience the Perfect Trio of Coffee</h1>
      <p>
        Discover our hand-picked collection of three exquisite coffees, roasted
        to perfection for a rich, flavorful taste.
      </p>
      <button>Learn More</button>
      <img
        className={styles.coffeeBag}
        src={bannerCoffeeBag}
        alt="coffee bag"
      />
    </div>
    <img
      className={styles.coffeeBeansLeft}
      src={bannerCoffeeBeansLeft}
      alt="coffee beans"
    />
    <img
      className={styles.coffeeBeansRight}
      src={bannerCoffeeBeansRight}
      alt="coffee beans"
    />
    <img className={styles.cup} src={bannerCup} alt="coffee cup" />
    <img className={styles.donut} src={bannerDonut} alt="donut" />
    <img className={styles.bannerLeafRight} src={bannerLeafRight} alt="leaf" />
    <img className={styles.bannerLeafLeft} src={bannerLeafLeft} alt="leaf" />
  </div>
);

export default Hero;
