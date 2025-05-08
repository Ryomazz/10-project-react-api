import { useWeatherAppContext } from "../context/GeoWeatherAppContext";
import Temp from "./Temp";

function Weather() {
   const date = new Date().toDateString();
   const { setTypeOfTemp, weatherInfo, error, loadingWeather } =
      useWeatherAppContext();
   return (
      <section className="weather-info">
         {error ? (
            <h2>{error}</h2>
         ) : (
            weatherInfo && (
               <article>
                  <div className="info-country">
                     <h2>
                        {weatherInfo?.name} <br /> {weatherInfo?.sys?.country}
                     </h2>
                     <h3>{date}</h3>
                  </div>
                  <div className="infor-temp">
                     <Temp temp={weatherInfo?.main?.temp} />
                     <h3>
                        Description: {weatherInfo?.weather[0]?.description}
                     </h3>
                  </div>

                  <p>Wind Speed : {weatherInfo?.wind?.speed} mps </p>
               </article>
            )
         )}
         {loadingWeather && <h2>Loading data, please wait...</h2>}
      </section>
   );
}
export default Weather;
