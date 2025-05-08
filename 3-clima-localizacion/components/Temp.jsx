import { useEffect, useState } from "react";
import { useWeatherAppContext } from "../context/GeoWeatherAppContext";

function Temp({ temp }) {
   const [actualTemp, setActualTemp] = useState(0);
   const { typeOfTemp } = useWeatherAppContext();

   useEffect(() => {
      if (typeOfTemp) {
         setActualTemp(`${Math.round(temp - 273)}º`);
      } else {
         setActualTemp(`${Math.round(temp - 273) * (9 / 5) + 32}º`);
      }
   }, [typeOfTemp]);

   return <h1>{actualTemp}</h1>;
}
export default Temp;
