import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Weather from "../components/Weather";

function App() {
   const [cityName, setCityName] = useState("Havana");
   const [weatherInfo, error, loadingWeather, setGeoCoords] =
      useFetchData(cityName);

   const handleSubmit = (e) => {
      e.preventDefault();
      setCityName(e.target.query.value);
      setGeoCoords({ lat: null, lon: null });
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
         <Weather
            weatherInfo={weatherInfo}
            error={error}
            loadingWeather={loadingWeather}
         />
      </div>
   );
}
export default App;
