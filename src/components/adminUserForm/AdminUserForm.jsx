"use client";

import { useFormState } from "react-dom";
import { addUser } from "../../lib/action";
import styles from "./adminUserForm.module.css";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <input
        type="text"
        name="profilePic"
        placeholder="Profie Pic URL"
        required
      />
      <select name="isAdmin" required>
        <option value="false">is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      {state && state.error}
      <button>Add</button>
    </form>
  );
};

export default AdminUserForm;
