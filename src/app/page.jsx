import Image from "next/image";
import styles from "./home.module.css";
import { connectToDB } from "../lib/connectToDB";
import Link from "next/link";
const Home = () => {
  connectToDB();
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Insights of a Contemplative Creator</h1>
        <p className={styles.desc}>
          Yes, the above title is AI generated and most of the content here will
          be too! Rest will be handled by lorem ipsum. Too lazy to ChatGPT the
          shit out of this.
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ad reprehenderit ullam amet eaque corrupti consequatur neque
          aliquid odit praesentium odio provident harum aperiam, pariatur autem.
          Ut voluptates iure saepe reprehenderit?
        </p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={`${styles.button} ${styles.learnMore}`}>
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/computer.gif"
          style={{ borderRadius: "10%" }}
          alt=""
          height={324}
          width={480}
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
