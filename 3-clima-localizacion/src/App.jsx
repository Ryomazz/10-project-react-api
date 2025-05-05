import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

let urlCountry = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=44d709fafb1c0ca7129796faaf418681`;

let urlCoord = `https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid=44d709fafb1c0ca7129796faaf418681`;

function App() {
   const [cityName, setCityName] = useState("Havana");
   const [weatherInfo, error, loadingWeather, setGeoCoords] =
      useFetchData(cityName);

   const handleSubmit = (e) => {
      e.preventDefault();
      setCityName(e.target.query.value);
      setGeoCoords({ lat: null, lon: null });
      console.log(weatherInfo);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="London, Havana, Madrid..."
               name="query"
            />
            <button>Get Weather Info</button>
         </form>
         {error ? (
            <h2>{error}</h2>
         ) : (
            weatherInfo && (
               <section>
                  <h1>
                     {weatherInfo?.name} {weatherInfo?.sys?.country}
                  </h1>
                  <h3>Description: {weatherInfo?.weather[0]?.description}</h3>
                  <p>Temp: {Math.round(weatherInfo?.main?.temp - 273)}ºC </p>
                  <p>
                     Feels Like:{" "}
                     {Math.round(weatherInfo?.main?.feels_like - 273)}
                     ºC{" "}
                  </p>
                  <p>Humidity : {weatherInfo?.main?.humidity}% </p>
               </section>
            )
         )}
         {loadingWeather && <h2>Loading data, please wait...</h2>}
      </div>
   );
}
export default App;
