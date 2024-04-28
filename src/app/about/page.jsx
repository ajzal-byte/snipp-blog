import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          ipsa.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          quo dolores explicabo totam! Quas illo eum, modi eos dignissimos ex
          exercitationem molestias consequuntur nisi temporibus quae, quaerat
          porro eaque vero non deserunt ipsa! Aspernatur nostrum vero accusamus
          quod voluptas a esse veniam maxime libero! Obcaecati quidem odit quasi
          cupiditate rerum.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="about image" fill />
      </div>
    </div>
  );
};

export default About;
