import { useSearchMovieContext } from "../AppContext";
import { useEffect, useState } from "react";

function useFetchMovies() {
   const [query, setQuery] = useState("");
   const [loading, setLoading] = useState(false);
   const { setMovies, setSuggestions } = useSearchMovieContext();

   const fetchMovies = async (searchTerm) => {
      if (!searchTerm.trim() || searchTerm.length < 2) {
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

   return [query, setQuery, loading];
}
export default useFetchMovies;
