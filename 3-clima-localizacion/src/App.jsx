import useFetchData from "../hooks/useFetchData";
import Weather from "../components/Weather";
import Search from "../components/Search";
import { useWeatherAppContext } from "../context/GeoWeatherAppContext";

function App() {
   const { cityName } = useWeatherAppContext();
   const [weatherInfo, error, loadingWeather] = useFetchData(cityName);

   return (
      <div>
         <Search />
         <Weather
            weatherInfo={weatherInfo}
            error={error}
            loadingWeather={loadingWeather}
         />
      </div>
   );
}
export default App;
