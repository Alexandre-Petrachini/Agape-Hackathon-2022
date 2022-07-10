import React from "react";
import "./styles.scss";
import { FaFile } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsPlus } from "react-icons/bs";
import Button from "../Button";

interface Props {
  name: string;
  description: string;
}

function WorkshopBox(props: Props) {
  const { name, description } = props;
  return (
    <div
      data-testid="workshop-component"
      id="workshop-component"
      className="container"
    >
      <div>
        <div className="name-workbox">{name}</div>
        <div className="description-workbox">{description}</div>
      </div>
      <div className="workshop-button">
        {
          <Button
            type="button"
            text="Detalhes"
            icon={<BsPlus style={{ height: "20px", width: "20px" }} />}
            style={{
              backgroundColor: "#FF9A59",
              color: "white",
              border: "none",
            }}
            onClick={() => console.log(name)}
          />
        }
      </div>
    </div>
  );
}

export default WorkshopBox;
