import React, { useState } from "react";
import "./styles.scss";
import Logo from "../../../../images/login_logo.png";
import Input from "../../components/Input";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div id="login-screen">
      <Header />
      <img src={Logo} />

      <form>
        <Input
          label="Usuário:"
          error=""
          id="Login-user"
          onChange={handleUsernameChange}
          style={{ color: "#fff" }}
        />

        <Input
          label="Senha:"
          error=""
          id="Login-password"
          isPassword
          onChange={handlePasswordChange}
          style={{ color: "#fff" }}
        />

        <button onClick={() => navigate("/workshops")}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
