import { useEffect, useState } from "react";

function Temp({ temp }) {
   const [actualTemp, setActualTemp] = useState(0);
   const [typeOfTemp, setTypeOfTemp] = useState(true);

   useEffect(() => {
      if (typeOfTemp) {
         setActualTemp(`${Math.round(temp - 273)}ºC`);
      } else {
         setActualTemp(`${Math.round(temp - 273) * (9 / 5) + 32}ºF`);
      }
   }, [typeOfTemp]);

   return (
      <button onClick={() => setTypeOfTemp(!typeOfTemp)}>{actualTemp}</button>
   );
}
export default Temp;
