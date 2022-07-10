import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./infrastructure/redux/store";
import { AppRoutes } from "./infrastructure/views/routes";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./infrastructure/views/assets/fonts/FSLola/FSLola.ttf";
import "./styles.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div id="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
