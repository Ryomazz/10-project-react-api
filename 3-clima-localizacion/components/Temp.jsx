import { useEffect, useState } from "react";
import { useWeatherAppContext } from "../context/GeoWeatherAppContext";

function Temp({ temp }) {
   const [actualTemp, setActualTemp] = useState(0);
   const { typeOfTemp } = useWeatherAppContext();

   console.log(actualTemp);

   useEffect(() => {
      if (typeOfTemp) {
         setActualTemp(`${Math.round(temp - 273).toFixed(0)}º`);
      } else {
         setActualTemp(
            `${(Math.round(temp - 273) * (9 / 5) + 32).toFixed(0)}º`
         );
      }
   }, [typeOfTemp, temp]);

   return <h1>{actualTemp}</h1>;
}
export default Temp;
