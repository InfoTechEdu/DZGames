import ReactDOM from "react-dom/client";
import App from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
