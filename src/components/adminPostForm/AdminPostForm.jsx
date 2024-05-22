"use client";

import { useFormState } from "react-dom";
import styles from "./adminPostForm.module.css";
import { addPost } from "../../lib/action";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" required />
      <input type="text" name="slug" placeholder="Slug" required />
      <input type="text" name="img" placeholder="Image URL" required />
      <textarea
        type="text"
        name="desc"
        placeholder="Description"
        rows={10}
        cols={50}
        required
      />
      {state && state.error}
      <button>Add</button>
    </form>
  );
};

export default AdminPostForm;
