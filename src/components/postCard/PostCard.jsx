import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className={styles.img}
            fill
          />
        </div>
        <span className={styles.date}>28.04.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis qui
          quidem perspiciatis rerum ratione repellendus nostrum assumenda quod,
          architecto ab quaerat rem accusamus? Nesciunt totam quis aut laborum,
          asperiores quam.
        </p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
