import React, { useState } from "react";
import "./styles.scss";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

interface Props {
  label?: string;
  error: string;
  id: string;
  isPassword?: boolean;
  style?: React.CSSProperties;
  maxLength?: number;
  onChange: (v: string) => void;
}

function Input(props: Props) {
  const [showPassword, changeShowPassword] = useState<boolean>(false);

  const { onChange, label, id, error, isPassword, maxLength, style } = props;

  const toggleShowPassword = () => {
    changeShowPassword(!showPassword);
  };
  console.log(style);
  return (
    <div
      id="input-component"
      data-testid="input-component"
      className="container"
    >
      {label && <div className={`label${error ? " error" : ""}`}>{label}</div>}
      <div className={`input-div${error ? " error" : ""}`}>
        {isPassword ? (
          !showPassword ? (
            <BsFillEyeFill
              data-testid="BsFillEyeFill"
              onClick={() => toggleShowPassword()}
              className="icon"
            />
          ) : (
            <BsFillEyeSlashFill
              data-testid="BsFillEyeSlashFill"
              onClick={() => toggleShowPassword()}
              className="icon"
            />
          )
        ) : null}
        <input
          className="input"
          data-testid="input"
          maxLength={maxLength}
          type={isPassword ? (showPassword ? "text" : "password") : "text"}
          id={id}
          style={{ ...style }}
          placeholder={label}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Input;
