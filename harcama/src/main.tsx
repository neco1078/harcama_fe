import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);