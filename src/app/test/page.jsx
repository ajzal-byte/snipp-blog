import React from "react";
import { addPost, deletePost } from "../../lib/action";

const Test = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Click me</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="post id" name="postId" />
        <button>Click me</button>
      </form>
    </div>
  );
};

export default Test;
