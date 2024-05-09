import Image from "next/image";
import styles from "./home.module.css";
import {connectToDB} from "../lib/connectToDB"
const Home = () => {
connectToDB()
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          reprehenderit ullam amet eaque corrupti consequatur neque aliquid odit
          praesentium odio provident harum aperiam, pariatur autem. Ut
          voluptates iure saepe reprehenderit?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brand} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
