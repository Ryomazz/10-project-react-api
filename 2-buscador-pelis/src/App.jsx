import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
   const [movies, setMovies] = useState([]);
   const [suggestions, setSuggestions] = useState([]);
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState("");
   const [showModal, setShowModal] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState("");

   const fetchMovies = async (searchTerm) => {
      if (searchTerm.length < 2) {
         setMovies([]);
         return;
      }
      setLoading(true);
      try {
         const response = await fetch(
            `https://www.omdbapi.com/?apikey=edf2da3d&s=${searchTerm}`
         );
         const data = await response.json();

         if (data.Search.length <= 4) {
            setMovies(data.Search);
            setSuggestions([]);
            return;
         }

         setMovies(data.Search);
         setSuggestions(data.Search.slice(0, 4));
      } catch (error) {
         console.log("Was an error: ", error.message);
      } finally {
         setLoading(false);
      }
   };

   //Debounce
   useEffect(() => {
      const timer = setTimeout(() => {
         fetchMovies(query);
      }, 300);

      return () => clearTimeout(timer);
   }, [query]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setSuggestions([]);
   };

   const handleShowModal = (id) => {
      setShowModal(!showModal);
      setSelectedMovie(id);
      console.log(showModal, selectedMovie);
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
         {showModal && (
            <MovieDetails
               selectedMovie={selectedMovie}
               handleShowModal={handleShowModal}
            />
         )}
         <Movies
            movies={suggestions && suggestions.length ? suggestions : movies}
            handleShowModal={handleShowModal}
         />
         {suggestions && suggestions.length ? (
            <h2>Load all result presing the search button</h2>
         ) : null}
      </div>
   );
}
export default App;
