import { useEffect, useState } from "react";

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=44d709fafb1c0ca7129796faaf418681`;

function App() {
   const [geoInfo, setGeoInfo] = useState({});
   const [weatherInfo, setWeatherInfo] = useState([]);
   const [loadingWeather, setLoadingWeather] = useState(false);
   const [cityName, setCityName] = useState("Havana");

   const fetchWeatherInfo = async () => {
      setLoadingWeather(true);
      try {
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoInfo.lat}&lon=${geoInfo.lon}&appid=44d709fafb1c0ca7129796faaf418681`
         );
         const data = await response.json();
         console.log(geoInfo);
      } catch (error) {
         console.log("There was an erro fetching data: ", error.message);
      } finally {
         setLoadingWeather(false);
      }
   };

   const fetchGeoInfo = async () => {
      try {
         const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=44d709fafb1c0ca7129796faaf418681`
         );
         const data = await response.json();
         setGeoInfo({ lat: data.lat, lon: data.lon });
      } catch (error) {
         console.log("There was an error: ", error.message);
      }
   };

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         function (position) {
            const navGeoData = {
               lat: position.coords.latitude,
               lon: position.coords.longitude,
            };
            setGeoInfo(navGeoData);
         },
         function (error) {
            console.log("There was error: ", error.message);
            fetchGeoInfo();
         }
      );
   }, [geoInfo]);

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
      </div>
   );
}
export default App;
