import { useEffect, useState } from "react";

const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=44d709fafb1c0ca7129796faaf418681`;

function App() {
   const [geoCoords, setGeoCoords] = useState({ lat: null, lon: null });
   const [cityName, setCityName] = useState("");
   const [weatherInfo, setWeatherInfo] = useState(null);
   const [loadingWeather, setLoadingWeather] = useState(false);
   const [error, setError] = useState(null);

   // Getting geolocation when mounting component
   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               setGeoCoords({
                  lat: position.coords.latitude,
                  lon: position.coords.longitude,
               });
            },
            (error) => {
               setError("No se pudo obtener la ubicacion: " + error.message);
            }
         );
      } else {
         setError("Geolocalización no soportada por tu navegador");
      }
   }, []);

   const fetchWeatherData = async () => {
      if ((!geoCoords.lat && !geoCoords.lon && !cityName) || loadingWeather)
         return;

      setLoadingWeather(true);
      setError(null);
      try {
         let url = "https://api.openweathermap.org/data/2.5/weather?";
         let apiKey = "44d709fafb1c0ca7129796faaf418681";

         if (cityName) {
            url += `q=${cityName}&appid=${apiKey}`;
         } else if (geoCoords.lat && geoCoords.lon) {
            url += `lat=${geoCoords.lat}&lon=${geoCoords.lon}&appid=${apiKey}`;
         } else return;

         const response = await fetch(url);
         if (!response.ok) throw new Error("Error en la respuest");
         const data = await response.json();

         setWeatherInfo(data);
      } catch (error) {
         setError("Error obteniendo datos del clima: ", error.message);
      } finally {
         setLoadingWeather(false);
      }
   };

   // Fetch weather data when coords or city name change
   useEffect(() => {
      if ((!geoCoords.lat && !geoCoords.lon && !cityName) || loadingWeather)
         return;
      fetchWeatherData();
   }, [geoCoords, loadingWeather]);

   const handleClick = (e) => {
      e.preventDefault();
      fetchWeatherData();
   };

   return (
      <div>
         <form>
            <input
               type="text"
               placeholder="London, Havana, Madrid..."
               value={cityName}
               onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={handleClick}>Get Weather Info</button>
         </form>
         {error && <h2>There was an error: {error}</h2>}
         {loadingWeather && <h2>Loading data, please wait...</h2>}
         {weatherInfo && (
            <section>
               <h1>
                  {weatherInfo?.name} {weatherInfo?.sys?.country}
               </h1>
               <h3>Description: {weatherInfo?.weather[0]?.description}</h3>
               <p>Temp: {Math.round(weatherInfo?.main?.temp - 273)}ºC </p>
               <p>
                  Feels Like: {Math.round(weatherInfo?.main?.feels_like - 273)}
                  ºC{" "}
               </p>
               <p>Humidity : {weatherInfo?.main?.humidity}% </p>
            </section>
         )}
      </div>
   );
}
export default App;
