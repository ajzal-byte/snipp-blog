import Image from "next/image"
import styles from "./contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact