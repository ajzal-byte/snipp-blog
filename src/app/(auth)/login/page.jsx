import { LoginForm } from "../../../components";
import { handleSocialLogin } from "../../../lib/action";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.socialForm} action={handleSocialLogin}>
          <button name="action" value="google" className={styles.google}>Login with Google</button>
          <button name="action" value="github" className={styles.github}>Login with Github</button>
        </form>
        OR
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
