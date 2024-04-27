import Image from "next/image";
import React from "react";
import styles from "./about.module.css"

const About = () => {
  return (
    <div>
      <Image src="/about.png" alt="about" width={500} height={500} />
    </div>
  );
};

export default About;
