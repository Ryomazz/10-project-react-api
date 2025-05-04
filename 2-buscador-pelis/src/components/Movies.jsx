import MovieCard from "./MovieCard";
import { useSearchMovieContext } from "../AppContext";
import { useEffect } from "react";

function Movies() {
   const {
      suggestions,
      movies,
      isOrdered,
      uncontractedMovies,
      setUncontractedMovies,
   } = useSearchMovieContext();

   //Make date off of contract API
   useEffect(() => {
      if (isOrdered) {
         setUncontractedMovies(
            suggestions && suggestions.length
               ? suggestions
                    .map((movie) => {
                       return {
                          title: movie.Title,
                          year: movie.Year,
                          poster: movie.Poster,
                          id: movie.imdbID,
                       };
                    }) //Sorted by year
                    .sort((a, b) => a.year - b.year)
               : movies && movies.length
               ? movies
                    .map((movie) => {
                       return {
                          title: movie.Title,
                          year: movie.Year,
                          poster: movie.Poster,
                          id: movie.imdbID,
                       };
                    }) //Sorted by year
                    .sort((a, b) => a.year - b.year)
               : null
         );
      } else {
         setUncontractedMovies(
            suggestions && suggestions.length
               ? suggestions.map((movie) => {
                    return {
                       title: movie.Title,
                       year: movie.Year,
                       poster: movie.Poster,
                       id: movie.imdbID,
                    };
                 })
               : movies && movies.length
               ? movies.map((movie) => {
                    return {
                       title: movie.Title,
                       year: movie.Year,
                       poster: movie.Poster,
                       id: movie.imdbID,
                    };
                 })
               : null
         );
      }
   }, [movies, suggestions, isOrdered]);

   return (
      <section className="movies-container">
         {uncontractedMovies && uncontractedMovies.length
            ? uncontractedMovies.map((movie) => {
                 const { id } = movie;
                 return <MovieCard key={id} movie={movie} />;
              })
            : null}
      </section>
   );
}
export default Movies;
