import Image from "next/image";
import styles from "./contact.module.css";
import { ContactForm } from "../../components";

export const metadata = {
  title: "Contact Page",
  description: "This is the Contact page of Snipp",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.svg" alt="contact" fill className={styles.img} />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
