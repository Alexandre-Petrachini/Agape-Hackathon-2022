import "./styles.scss";
import AuthControllerImpl from "../../../controllers/AuthControllerImpl";
import { AuthController } from "../../../controllers/ports/AuthController";
import { useNavigate } from "react-router-dom";
const authController: AuthController = new AuthControllerImpl();

function Landing() {
  let navigate = useNavigate();

  const onSubmit = async () => {
    const login = await authController.login("", "");
  };

  return (
    <div role="contentinfo" id="landing-screen" className="container">
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
        <button className="btn-1" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="btn-2" onClick={() => navigate("/sign-in")}>
          Cadastre-se
        </button>
      </div>
    </div>
  );
}

export default Landing;
