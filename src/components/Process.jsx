import styles from "./Process.module.css";
import {
  brewArrow,
  brew,
  cookie,
  donut,
  grinder,
  hearArrow,
  heatWater,
  kettle,
  kettleArrow,
  portafilter,
  pour,
  pourArrow,
  serve,
  serveArrow,
  bannerLeafLeft,
  bannerLeafRight,
  bannerCoffeeBeansLeft,
} from "../assets";

const Process = () => (
  <div className={styles.process}>
    <div className={styles.main}>
      <h2>Take a look at our carefully crafted process</h2>
      <img src={grinder} alt="grinder" />
      <h3>Measure and grind the coffee beans</h3>
      <p>
        Measure out the desired amount of whole coffee beans and grind them to
        the appropriate size, depending on the brewing method you are using.
      </p>
      <img src={hearArrow} alt="arrow" />
      <img src={heatWater} alt="heat water" />
      <h3>Heat water to the correct temperature</h3>
      <p>
        For most brewing methods, the ideal water temperature is between 195°F
        to 205°F (90°C to 96°C). Use a thermometer to measure the water
        temperature or bring it to a boil and let it cool for a few minutes.
      </p>
      <img src={kettleArrow} alt="arrow" />
      <img src={kettle} alt="kettle" />
      <h3>Measure and grind the coffee beans</h3>
      <p>
        Measure out the desired amount of whole coffee beans and grind them to
        the appropriate size, depending on the brewing method you are using.
      </p>
      <img src={pourArrow} alt="arrow" />
      <img src={pour} alt="pour" />
      <h3>Pour the hot water over the coffee</h3>
      <p>
        Slowly pour the hot water over the coffee in a circular motion, making
        sure all the grounds are evenly saturated. The water should be poured in
        stages or pulses, depending on the brewing method.
      </p>
      <img src={brewArrow} alt="arrow" />
      <img src={brew} alt="brew" />
      <h3>Allow the coffee to brew</h3>
      <p>
        Depending on the brewing method, allow the coffee to brew for a few
        minutes. During this time, the water will extract the coffee's flavor
        and aroma.
      </p>
      <img src={serveArrow} alt="arrow" />
      <img src={serve} alt="serve" />
      <h3>Serve and enjoy</h3>
      <p>
        Once the coffee has finished brewing, remove the brewing device and
        serve the coffee immediately. You can add cream, milk, or sweeteners to
        taste.
      </p>
    </div>
    <img src={bannerLeafRight} className={styles.leafRight} alt="leaf" />
    <img src={bannerLeafLeft} className={styles.leafLeft} alt="leaf" />
    <img
      src={bannerCoffeeBeansLeft}
      className={styles.coffeeLeft}
      alt="coffee"
    />
    <img src={portafilter} className={styles.portafilter} alt="portafilter" />
    <img src={cookie} className={styles.cookie} alt="cookie" />
    <img src={donut} className={styles.donut} alt="donut" />
  </div>
);

export default Process;
