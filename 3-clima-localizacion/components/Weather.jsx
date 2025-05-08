import { useEffect, useState } from "react";
import Temp from "./Temp";

function Weather({ error, weatherInfo, loadingWeather }) {
   return (
      <div>
         {error ? (
            <h2>{error}</h2>
         ) : (
            weatherInfo && (
               <section>
                  <h1>
                     {weatherInfo?.name} {weatherInfo?.sys?.country}
                  </h1>
                  <h3>Description: {weatherInfo?.weather[0]?.description}</h3>
                  <p>
                     Temp: <Temp temp={weatherInfo?.main?.temp} />
                  </p>
                  <p>
                     Feels Like: <Temp temp={weatherInfo?.main?.feels_like} />
                  </p>
                  <p>Humidity : {weatherInfo?.main?.humidity}% </p>
               </section>
            )
         )}
         {loadingWeather && <h2>Loading data, please wait...</h2>}
      </div>
   );
}
export default Weather;
