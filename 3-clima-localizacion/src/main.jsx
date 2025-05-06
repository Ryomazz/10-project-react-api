import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeoWeatherAppContext from "../context/GeoWeatherAppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <GeoWeatherAppContext>
         <App />
      </GeoWeatherAppContext>
   </React.StrictMode>
);
