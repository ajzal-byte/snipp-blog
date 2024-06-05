import Image from "next/image";
import React from "react";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "This is the About page of Snipp",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div style={{ display: "flex" }}>
          <h2 className={styles.subtitle}>About who?</h2>
        </div>
        <h1 className={styles.title}>Lorem ipsum is inevitable</h1>
        <p className={styles.desc}>
          Did you know that the original lorem ipsum text was actually a
          purposeful misspelling and scrambling of a Latin passage?
          <br />
          It was originally created as a joke by early typesetters. They took a
          Latin text and intentionally scrambled and mangled the words, creating
          a nonsensical placeholder that eventually became the standard.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.svg" alt="about image" fill />
      </div>
    </div>
  );
};

export default About;
