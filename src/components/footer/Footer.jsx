import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link
          href="https://github.com/ajzal-byte"
          rel="noopener noreferrer"
          target="_blank"
        >
          ajzal-byte
        </Link>
      </div>
      <div className={styles.text}>
        <Link
          href="https://github.com/ajzal-byte/snipp-blog"
          rel="noopener noreferrer"
          target="_blank"
        >
          Snipp Blogs &#169; All rights reserved
        </Link>
      </div>
    </div>
  );
};

export default Footer;
