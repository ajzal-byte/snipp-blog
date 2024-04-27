import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dev</div>
      <div className={styles.text}>
        Creatice agency &#169; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
