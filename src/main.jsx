import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GeneralInfo from "./GeneralInfo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInfo></GeneralInfo>
  </StrictMode>
);
