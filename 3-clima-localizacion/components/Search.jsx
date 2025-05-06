import { useWeatherAppContext } from "../context/GeoWeatherAppContext";

function Search() {
   const { setCityName, setGeoCoords } = useWeatherAppContext();
   const handleSubmit = (e) => {
      e.preventDefault();
      setCityName(e.target.query.value);
      setGeoCoords({ lat: null, lon: null });
   };
   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="London, Havana, Madrid..."
            name="query"
         />
         <button>Get Weather Info</button>
      </form>
   );
}
export default Search;
