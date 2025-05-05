import { use } from "react";
import { useEffect, useState } from "react";

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=44d709fafb1c0ca7129796faaf418681`;

function App() {
   const [weatherInfo, setWeatherInfo] = useState(null);
   const [loadingWeather, setLoadingWeather] = useState(false);
   const [error, setError] = useState(null);
   const [cityName, setCityName] = useState("Havana");
   const [geoInfo, setGeoInfo] = useState(null);

   const fetchGeoInfo = async () => {
      setLoadingWeather(true);
      try {
         const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=44d709fafb1c0ca7129796faaf418681`
         );
         const data = await response.json();
         const responseWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=44d709fafb1c0ca7129796faaf418681`
         );
         const dataWeather = await responseWeather.json();
         setWeatherInfo(dataWeather);
      } catch (error) {
         setError(error.message);
      } finally {
         setLoadingWeather(false);
      }
   };

   useEffect(() => {}, []);

   const handleClick = (e) => {
      e.preventDefault();
      fetchGeoInfo();
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
