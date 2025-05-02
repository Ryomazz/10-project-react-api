function MovieCard({ movie }) {
   const { title, year, poster } = movie;
   return (
      <article className="movie">
         <h2>{title}</h2>
         <h3>{year}</h3>
         <img src={poster} alt={title} />
      </article>
   );
}
export default MovieCard;
