import { useSearchMovieContext } from "../AppContext";

function MovieCard({ movie }) {
   const { handleShowModal } = useSearchMovieContext();
   const { title, year, poster, id } = movie;
   return (
      <article className="movie" onClick={() => handleShowModal(id)}>
         <h2>{title}</h2>
         <h3>{year}</h3>
         <img src={poster} alt={title} />
      </article>
   );
}
export default MovieCard;
