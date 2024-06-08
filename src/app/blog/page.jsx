import styles from "./blog.module.css";
import { PostCard } from "../../components";
import Image from "next/image";
// import { getPosts } from "../../lib/data";

const getData = async () => {
  const res = await fetch("https://snipp-blog.vercel.app/api/blog");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const metadata = {
  title: "Blogs Page",
  description: "This is the Blogs page of Snipp",
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div>
      {posts.length > 0 ? (
        <div className={styles.container}>
          {posts.map((post) => (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.noPosts}>
          <div>
          <h1 style={{fontSize: "56px"}}>No posts available</h1>
          <p>Look&apos;s like someone&apos;s thinking on <span style={{fontWeight: "bold"}}>WHAT TO WRITE!</span></p>
          </div>
          <div className={styles.imgcontainer}>
            <Image
              className={styles.img}
              src="/thinking.svg"
              alt="thinking"
              fill
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
