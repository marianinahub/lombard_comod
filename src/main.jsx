import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import "./styles/base.css";
import "./styles/buttons.css";
import "./styles/header.css";
import "./styles/calculator.css";
import "./styles/shop.css";
import "./styles/hero.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);