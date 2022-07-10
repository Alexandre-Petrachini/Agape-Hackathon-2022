import React from "react";
import "./styles.scss";
import { BiArrowBack } from "react-icons/bi";
import Logo from "../../../../images/header_logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div id="header-component">
      <div className="btn-back" onClick={() => navigate(-1)}>
        {<BiArrowBack />}
      </div>
      <img src={Logo} style={{ marginLeft: "60px" }} />
      <div style={{ width: "20px" }} />
    </div>
  );
}

export default Header;
