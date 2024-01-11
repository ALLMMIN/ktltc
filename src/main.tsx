import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@components/styles/globals.css";
import App from "./App.js";
import * as React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
