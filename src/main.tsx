import "leaflet/dist/leaflet.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./Context/ThemeContext/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
