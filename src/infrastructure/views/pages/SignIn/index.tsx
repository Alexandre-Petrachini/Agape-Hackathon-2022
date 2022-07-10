import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../../../images/login_logo.png";
import Input from "../../components/Input";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div id="signin-screen">
      <img src={Logo} />

      <form>
        <Input
          label="Usuário:"
          error=""
          id="signin-user"
          onChange={handleUsernameChange}
        />

        <Input
          label="Senha:"
          error=""
          id="signin-password"
          isPassword
          onChange={handlePasswordChange}
        />

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default SignIn;
