import MovieCard from "./MovieCard";

function Movies({ movies, handleShowModal }) {
   const uncontractedMovies =
      movies && movies.length
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
                 return (
                    <MovieCard
                       key={id}
                       movie={movie}
                       handleShowModal={handleShowModal}
                    />
                 );
              })
            : null}
      </section>
   );
}
export default Movies;
