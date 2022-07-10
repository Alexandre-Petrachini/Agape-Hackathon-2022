import "./styles.scss";
import { useNavigate } from "react-router-dom";

function Landing() {
  let navigate = useNavigate();

  return (
    <div role="contentinfo" id="landing-screen" className="container">
      <div className="agape-logo">
        <img src={"./agapelogo.png"} style={{ height: "120px" }} />
      </div>
      <div className="agape-vai">
        <img src={"./agapevai.png"} style={{ height: "250px" }} />
      </div>
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
