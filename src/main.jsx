import React from "react";
import ReactDOM from "react-dom/client";
import Brainwave from "./Brainwave.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Brainwave />
    </BrowserRouter>
  </React.StrictMode>
);
