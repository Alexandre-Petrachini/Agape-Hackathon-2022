import "./styles.scss";
import AuthControllerImpl from "../../../controllers/AuthControllerImpl";
import { AuthController } from "../../../controllers/ports/AuthController";
const authController: AuthController = new AuthControllerImpl();

function Login() {
  const onSubmit = async () => {
    const login = await authController.login("", "");
  };

  return (
    <div role="contentinfo" id="login-screen" className="container">
      <div className="introduction">
        <div className="introduction-text-wrapper">
          <p>
            Olá! Essa plataforma é uma ferramenta para atuar com os projetos
            plano de vida e clube de protagonismo
          </p>
          <p> Vamos começar? Faça o cadastro ou login</p>
        </div>
      </div>

      <div id="footer">
        <button className="btn-1">Login</button>
        <button className="btn-2">Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
