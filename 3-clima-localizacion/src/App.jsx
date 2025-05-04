import { useEffect, useState } from "react";

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=44d709fafb1c0ca7129796faaf418681`;

function App() {
   const [weatherInfo, setWeatherInfo] = useState([]);
   const [loadingWeather, setLoadingWeather] = useState(false);
   const [error, setError] = useState(null);
   const [cityName, setCityName] = useState("Havana");

   const fetchWeatherInfo = async () => {
      setLoadingWeather(true);
      try {
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${23.135305}&lon=${-82.3589631}&appid=44d709fafb1c0ca7129796faaf418681`
         );
         const data = await response.json();
         setWeatherInfo(data);
         console.log(data);
      } catch (error) {
         console.log(error.message);
         setError(error.message);
      } finally {
         setLoadingWeather(false);
      }
   };

   useEffect(() => {
      fetchWeatherInfo();
   }, [cityName]);

   // useEffect(() => {
   //    navigator.geolocation.getCurrentPosition(
   //       function (position) {
   //          const navGeoData = {
   //             lat: position.coords.latitude,
   //             lon: position.coords.longitude,
   //          };
   //          setGeoInfo(navGeoData);
   //       },
   //       function () {
   //          fetchGeoInfo();
   //       }
   //    );
   // }, []);

   const handleClick = (e) => {
      e.preventDefault();
      fetchWeatherInfo();
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
         {weatherInfo && (
            <section>
               <h1>
                  {weatherInfo?.name} {weatherInfo?.sys?.country}
               </h1>
               <h2>Description: {weatherInfo?.weather?.description}</h2>
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
