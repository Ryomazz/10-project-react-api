import { useContext, createContext, useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";

const WeatherAppContext = createContext();

export const useWeatherAppContext = () => useContext(WeatherAppContext);

function GeoWeatherAppContext({ children }) {
   const [cityName, setCityName] = useState("Havana");
   const [geoCoords = "", setGeoCoords] = useState({ lat: null, lon: null });
   const [typeOfTemp, setTypeOfTemp] = useState(true);
   const [weatherInfo, error, loadingWeather] = useFetchData(
      cityName,
      geoCoords
   );

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
         value={{
            cityName,
            setCityName,
            geoCoords,
            setGeoCoords,
            typeOfTemp,
            setTypeOfTemp,
            weatherInfo,
            error,
            loadingWeather,
         }}
      >
         {children}
      </WeatherAppContext.Provider>
   );
}
export default GeoWeatherAppContext;
