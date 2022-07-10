import React, { useEffect } from "react";
import "./styles.scss";
import Header from "../../components/Header/Header";
import WorkshopBox from "../../components/WorkshopBox";

import WorkshopControllerImpl from "../../../controllers/WorkshopControllerImpl";
import { WorkshopController } from "../../../controllers/ports/WorkshopController";
import { ErrorModel } from "../../../controllers/models/ErrorModel";
import { WorkshopModel } from "../../../../domain/models/workshop/WorkshopModel";
const workshopController: WorkshopController = new WorkshopControllerImpl();
const Workshops = () => {
  const [workshops, setWorkshops] = React.useState<WorkshopModel[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await workshopController.getMyWorkshops("123");
        console.log(response);
        setWorkshops(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="workshops-screen">
      <Header />
      <span className="title-page">Oficinas</span>
      <div className="boxes">
        {workshops.map((w) => (
          <div className="box">
            <WorkshopBox name={w.name} description={w.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workshops;
