import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GeneralInfo from "./components/GeneralInfo";
import EduInfo from "./components/EduInfo";
import PracInfo from "./components/PracInfo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInfo></GeneralInfo>
    <EduInfo></EduInfo>
    <PracInfo></PracInfo>
  </StrictMode>
);
