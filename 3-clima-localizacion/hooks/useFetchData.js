import { useState, useEffect } from "react";

function useFetchData(cityName, geoCoords) {
   const [weatherInfo, setWeatherInfo] = useState(null);
   const [loadingWeather, setLoadingWeather] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      if (cityName === "") return;
      fetchWeatherInfo();
   }, [geoCoords, cityName]);

   const fetchWeatherInfo = async () => {
      setLoadingWeather(true);
      setError(null);
      try {
         let response = {};
         if (geoCoords.lat && geoCoords.lon) {
            response = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?lat=${geoCoords.lat}&lon=${geoCoords.lon}&appid=44d709fafb1c0ca7129796faaf418681`
            );
         } else if (cityName) {
            response = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=44d709fafb1c0ca7129796faaf418681`
            );
         }

         const data = await response.json();
         if (data.cod === "404") {
            throw new Error(data.message);
         }
         setWeatherInfo(data);
         setError(null);
      } catch (error) {
         setError("Error fetching weather info " + error.message);
      } finally {
         setLoadingWeather(false);
      }
   };

   return [weatherInfo, error, loadingWeather];
}
export default useFetchData;
