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
export default Weather;
