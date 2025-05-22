import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./components/App/App.tsx";
import "modern-normalize";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
