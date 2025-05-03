import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { useSearchMovieContext } from "./AppContext";
import useFetchMovies from "./hooks/useFetchMovies";

function App() {
   const { setSuggestions, showModal, suggestions } = useSearchMovieContext();
   const [query, setQuery, loading] = useFetchMovies();

   const handleSubmit = (e) => {
      e.preventDefault();
      setSuggestions([]);
   };

   return (
      <div className="wrapper">
         <h1>Search Movie</h1>
         <form>
            <input
               type="text"
               placeholder="Avengers, Matrix..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
         </form>
         {loading && <h2>Loading data, please wait...</h2>}
         {showModal && <MovieDetails />}
         <Movies />
         {suggestions && suggestions.length ? (
            <h2>Load all result presing the search button</h2>
         ) : null}
      </div>
   );
}
export default App;
