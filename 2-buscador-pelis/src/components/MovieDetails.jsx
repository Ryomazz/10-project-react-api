import { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useSearchMovieContext } from "../AppContext";

function MovieDetails() {
   const [movieDetails, setMovieDetails] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const { selectedMovie, handleShowModal } = useSearchMovieContext();

   const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
         const response = await fetch(
            `https://www.omdbapi.com/?apikey=edf2da3d&i=${selectedMovie}`
         );

         const data = await response.json();

         setMovieDetails(data);
         setIsLoading(false);

         console.log(data.Title);
      } catch (error) {
         console.log("There was an error: ", error.message);
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchMovieDetails();
   }, [selectedMovie]);

   if (isLoading) return <h2>Loading data movie...</h2>;

   return (
      <div className="movie-wrapper">
         {movieDetails && (
            <section className="movieDetails">
               <button className="close-btn" onClick={handleShowModal}>
                  ✖️
               </button>
               <h1>{movieDetails.Title}</h1>
               <h3>{movieDetails.Year}</h3>
               <img src={movieDetails.Poster} alt={movieDetails.Title} />
               <h4>{movieDetails.Genre}</h4>
               <p>{movieDetails.Actors}</p>
               <p className="plot">{movieDetails.Plot}</p>
            </section>
         )}
      </div>
   );
}
export default MovieDetails;
