import React from "react";
import Input from "../../components/Input";
import "./styles.scss";
import Logo from "../../../../images/header_logo.png";

const SignIn = () => {
  return (
    <div id="signin-screen">
      <button className="btn-back">{"< "} Voltar</button>
      <img src={Logo} />

      <form>
        <Input
          error=""
          label="Nome"
          id="sign-in-name"
          onChange={() => undefined}
        />

        <Input
          error=""
          label="Àrea de atuação"
          id="sign-in-name"
          onChange={() => undefined}
        />

        <Input
          error=""
          label="Registro funcional"
          id="sign-in-name"
          onChange={() => undefined}
        />

        <Input
          error=""
          label="Telefone"
          id="sign-in-name"
          onChange={() => undefined}
        />

        <Input
          error=""
          label="Email"
          id="sign-in-name"
          onChange={() => undefined}
        />

        <Input
          error=""
          label="Senha"
          isPassword
          id="sign-in-name"
          onChange={() => undefined}
        />
        <Input
          error=""
          label="Repetir senha"
          isPassword
          id="sign-in-name"
          onChange={() => undefined}
        />

        <button>Cadastre-se</button>
      </form>
    </div>
  );
};

export default SignIn;
