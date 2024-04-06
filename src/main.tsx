import React from "react";
import ReactDOM from "react-dom/client";
import Types from "./1.types.tsx";
import Hooks from "./2.hooks.tsx";
import Networks from "./3.network.tsx";
import Context from "./4.context.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>
);
