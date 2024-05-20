import { LoginForm } from "../../../components";
import { handleGithubLogin } from "../../../lib/action";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
          <button className={styles.google}>Login with Google</button>
        </form>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        OR
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
