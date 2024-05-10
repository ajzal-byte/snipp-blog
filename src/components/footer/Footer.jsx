import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link
          href="https://github.com/ajzal-byte/snipp-blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          ajzal-byte
        </Link>
      </div>
      <div className={styles.text}>
        Snipp Blogs &#169; All rights reserved
      </div>
    </div>
  );
};

export default Footer;
