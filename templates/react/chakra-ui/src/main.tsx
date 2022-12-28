import "@fontsource/raleway/400.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./components/Provider/Provider";
import { Fonts } from "./theme/foundations/fonts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <Fonts />
      <App />
    </Provider>
  </React.StrictMode>
);
