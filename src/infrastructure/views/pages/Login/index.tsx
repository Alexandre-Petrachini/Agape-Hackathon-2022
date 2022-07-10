import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../../../images/login_logo.png";
import Input from "../../components/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div id="login-screen">
      <img src={Logo} />

      <form>
        <Input
          label="Usuário:"
          error=""
          id="Login-user"
          onChange={handleUsernameChange}
        />

        <Input
          label="Senha:"
          error=""
          id="Login-password"
          isPassword
          onChange={handlePasswordChange}
        />

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
