import MovieCard from "./MovieCard";
import { useSearchMovieContext } from "../AppContext";

function Movies() {
   const { suggestions, movies } = useSearchMovieContext();
   const uncontractedMovies =
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
         : null;

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
