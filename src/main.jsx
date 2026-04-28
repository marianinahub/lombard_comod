import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import "./styles/base.css";
import "./styles/buttons.css";
import "./styles/header.css";
import "./styles/calculator.css";
import "./styles/shop.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/advantages.css";
import "./styles/about.css";
import "./styles/reviews.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/filters.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);