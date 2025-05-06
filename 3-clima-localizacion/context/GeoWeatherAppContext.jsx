import { useContext, createContext, useState, useEffect } from "react";

const WeatherAppContext = createContext();

export const useWeatherAppContext = () => useContext(WeatherAppContext);

function GeoWeatherAppContext({ children }) {
   const [cityName, setCityName] = useState("Havana");
   const [geoCoords, setGeoCoords] = useState({ lat: null, lon: null });

   //Definir las coordenadas al montar el componente
   useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
         setGeoCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
         });
      });
   }, []);

   return (
      <WeatherAppContext.Provider
         value={{ cityName, setCityName, geoCoords, setGeoCoords }}
      >
         {children}
      </WeatherAppContext.Provider>
   );
}
export default GeoWeatherAppContext;
