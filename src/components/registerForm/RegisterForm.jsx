"use client";
import Link from "next/link";
import { register } from "../../lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Confirm Password" name="cpassword" />
      <button>Register</button>
      <p className="error-msg" style={{color: "red"}}>{state?.error}</p>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
