import { useWeatherAppContext } from "../context/GeoWeatherAppContext";
import Temp from "./Temp";

function Weather() {
   const date = new Date().toDateString();
   const { typeOfTemp, setTypeOfTemp, weatherInfo, error, loadingWeather } =
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
                  <div className="info-temp">
                     <Temp temp={weatherInfo?.main?.temp} />
                     <h3>
                        {" "}
                        <img
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACxklEQVR4nO2Y7WvOURjHj83zU4sZU+QpZVETpYWMopk33oiE116gvcM7UZqiyB8w06KUUZ4T8sKUyAtPeWhKCQnD5in20eX+3vPr3u7ddv9+234/nc+769znXOd73edc51y/45zH4/F4PDEHGAjMAzYA24AtwGpgPlDo4g6wADgCfCY7b4E6oMLFDaAUOAG0BwQ/Ao4Bh4DDQCPwICOoRmC6iwNAJfBawt4Du4FJ3fSfAewCPmrMB6Cqb1V3FrUC+CpBx4GSHowdpxUzfgKbeldtdiFlQKuE7MzTxwAbqy35HVgUvdLURMN10iyzLRFoHwTcVxB7Iphnr3zZFi0KLTzgeBrQAHzJSM6HwBqgRvZ1oCCC+QqAK/JZG1UQVYFEtL17F7gKPA8EZFvhFzArkkndn3nL5dP+vPFROGuTWDvrSzN+r1Bgxumw4jMBTsn3ZhcG4IYc7eumzwjgGrAq1GRd+96o+S+EcTJXTp5aMufoOzJXnzw1lEjDuzBOaqI6hcLA3wNmWD6DFwO35aB/LiYBNEvHVPev2OkQSDBU7K10/QjwUloOWB4Cg3MNmBk4UpuVaD1fzujL/x8Zd9cbYHuXOQmMBZ6p40lLXhev75iFwHpdyla6GLc61XLAUf14qTdOnyghVWXcDFQWo4PFXrtu74kuAQBDVQ4ZDenG/Wo46BIEMAH4pEUot4Y7CmSJSxhAbcci6IvMGOMSBqk3AeOeGd9kDHEJAyiS9hYzXsjI+l0dV0gVrEarGZdlrHUJA5gt7U/M2CrjjEsYpG54o86M4sAXYKVLCKTeD9J1WHW6cYcaXgFTXAIA6qW5yV5f0o2FwPlAMEtdvFeiXlptJ5VldhgFnAtUmWeBdcDknKVz34ifo5xIbye71ZdnG1Cozi3Em6ZOK5EloGI9/V/UPZMunfuLNuCxXnKqO3LC4/F4PB7Pf8pvmkZtwS2BQLAAAAAASUVORK5CYII="
                           alt="cloud--v1"
                        />
                        {weatherInfo?.weather[0]?.description}
                     </h3>
                  </div>
                  <div className="info-footer">
                     <p>
                        <img
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtUlEQVR4nO2bbYhUVRjHH23LtOxDlhWV9iJUBL1i2QfrQ5hb9ipsZRFEBJKRQWVISma1WhCUJn4I+mqsFBWRmF8itEKNaku2zIjS0rRWrE1rK/vF4/xHT7fr7O7MnHvvzO4fBoZ77jz//30553k5z5gNYQi5ADgW+AB437/bYAIwDOjgEF73YzZYADyqC9+tj2OODQYAVwN/A/8AtwDX67sfm2rNDGAcsEtPfFFwfLGOdQNnWjMCOFKLnuNdoCUYOwJYo7ENwFHWbACe1wXuAE5JGT8J+F7nPGfNBGCa5vlfwOQK510B/Klzb7ImmvfderIP9+P8OTr3Z+B0a2QALQp0HKv64+sVI6zWb9b6+mCNCmCBLmQncPIAfjdWa4VjvjUigEuC+Tytit+3BuvGZdZIAI4GNtW6ogNLZOMLYKQ1CoAXJbwTGFGnG7nEGgHAlODVvbQO9i4OptK1VmQAo4GtemJP1NHuU7LptkdbUQEsldBPPPStszv9SLZfsCICmKiMrhe4IIL9C2V7PzDJCpjodOoJLYjIszB4ww4mU7kDmCthW3zljsgzAtgsrkesCADOAH6TqOsy4Jsqrr3AWbH5+gTwtgSttIwAvCbON7PirFTecvwKnGoZwbNEoEfcU7LiTXNNn0vEQ5ZfYfXTXDJG4F4J+K6WcLfGMHmbNNydh9v7RuT3ZEr+Xx0zpeHbTOuIwCwRf5WnP9aD+FpaZmZJulWkMzIhraznzmAqtmRJ2AkMj07Yt57hwWJ8exaEG0R2hxUEwF3StDE20SQR7SjS5oVC5B+lbWJMomUiedIKBqBd2pbGDHx2iuQ8KxiAc6VtVz1rEQcBXFWOvKygAD6TxskxjD8u489aQeEVaGmcF8P4Ghm/0QoK4GZpXB3D+BYZzz8HPwyACdK4OYbxHhk/xgoK1yaNPTGM98p4Yfz/YeIBxx8xjHfL+PFWUAAnSuNPMYx/KePnW0Hh5Xhp7Iph/C0Zn24FBXCrNL4Rw/jiZHdXzpuv65MleI9RpLE9BmmrjH9Yd+MD03GOdof2JltsPRuMViil1Nv7u8hPqztB/3W8pItcnjg+Prgxo2KRd4h8bhSCvvkv1/6jb5dPSIzNk7YVMQW0imRb1pVgvYHlZomnUyrE2zV2TUwRw1SHd9wXjSi9DvmOeDclbz4wW2MfR+86B6YHfXwnRCUr8R0XbL9tT/YSq6Nsd6aJGocyw44Meg66xOXFmItSznlV46tiaknLunw/0DHL4lR3Xtaqjqbd+JTzHtT4nsyzVGCGyL0Z6oYa7IzUZueVwGPAe2qIOpDUqNb3P7fmvcTyCI62mi+oGvhqLAH7qrkJwDrS8Yv7+aSrS1y8xySOhZYXKHmF5cGbcH8VN2Cf3Op6NUa2VfoTlVb88pNfZnmD0k0ot7E5VnpaGoFnbNAYke+TTwNwm15d5JYeqEewpCBnduDq9uQ25/sCcHbQ6u74QSHquCpseWw/P4jwDri6hvhPEaXqrLeylbFfe4rPaI574WKMl9f0GaM+wDaltBsDF1iO8Apbja60NnhH1yta6AYK/80Kj+0b/k+VwChdyCKv1ii661ahtVffuzTWrobrOCntEIZgIf4F/szRcx2PNpUAAAAASUVORK5CYII="
                           alt="external-drop-ecology-nawicon-detailed-outline-nawicon"
                        />
                        {weatherInfo?.main?.humidity}%{" "}
                     </p>
                     <p>
                        <img
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nO3ay6vNaxzH8QeFcpd77qXIRBgxEBPDY0LnH8CA+AOOTKjzBxicKMVIGbgmCgnl5DJBcco196NzlEu2iV567O9u/5K112/ba+3z+x3rXWuw+n3X830+v+f5fp/Ld6XUoUOHloFhWIcTeIhPeBHff8XQVHUwF3/qm+vZLlUVzMKr6OwjbME8jIhnG/Egnr+qrBi9I3EW4xrYjMbpwshUb5rhJm5hfBO7MRE7mQ399LEWB3EfXXiPu9iHNQMWUQjyUm8Ym0LI0ZL2i3BFc85jQRosMDscvyhhuxrvwv41dmE5JsRUXYLfCvH5D1YOlpDh4fRTiZF4G7YnG8VeBmNxOGz/zYkmtZvIZpmnTewuhd2xMtMWQwtiLrS00w0cbg9nR5rY/RWJYWI/2h6Dv6P9VS3pcANHkwvzeV0T25H58wM+dkT7fwyos304mBHrR0+GGdImP0vDx51WNprf6mLsxJtwcA9TWubk+4H/Nej7MrpsYOTN46TURjAqfH1opZCuWIn3tzX4CmBZ+L6V6gx2h5C9qa5gWiEWV6Q6ovvIcL4nFlMd0X3muRginmFmqgu6F9e8qdyDjyHiaU73ZX480PTbLj7jUOnUXjEhr3EDv5cahQ4dOvyEaF/W6orT4IG8NtRZyLecygtequk+aWEcU/OVjtj+T011BdNxLcRcaNeReFDIWw28LHNJUXmwrT9Xq1Wvt2SepDqj92q1K9UZvZfdz1PV0L/yw+YyV6v/CVEMul2yIJRLeJn1qcIlunONxISIM2F3taolupmF9eExtmJ+rOxzYjr1jES2m5MqHsRX9M3VSov4Juh/wfHCHwueR1FnQyWnU4cO/3O+ACFzQ9YFbgicAAAAAElFTkSuQmCC"
                           alt="wind--v1"
                        />
                        {weatherInfo?.wind?.speed} mps{" "}
                     </p>
                     <div className="button-container">
                        <button
                           className={typeOfTemp ? "active" : null}
                           onClick={() => setTypeOfTemp(true)}
                        >
                           Cº
                        </button>
                        <button
                           className={typeOfTemp ? null : "active"}
                           onClick={() => setTypeOfTemp(false)}
                        >
                           Fº
                        </button>
                     </div>
                  </div>
               </article>
            )
         )}
         {loadingWeather && <h2>Loading data, please wait...</h2>}
      </section>
   );
}
export default Weather;
