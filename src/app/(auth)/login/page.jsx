import React from "react";
import { handleGithubLogin, login } from "../../../lib/action";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button>Login with Credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
