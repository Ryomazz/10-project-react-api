import { useEffect, useState } from "react";

function App() {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true);
   const [movieName, setMovieName] = useState("");

   const fetchMovies = async () => {
      try {
         const response = await fetch(
            `https://www.omdbapi.com/?apikey=edf2da3d&s=${movieName}`
         );
         const data = await response.json();

         setMovies(data.Search);
      } catch (error) {
         console.log("Was an error: ", error.message);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchMovies();
   }, [movieName]);

   return (
      <div>
         <form>
            <input
               type="text"
               placeholder="Avengers, Matrix..."
               value={movieName}
               onChange={(e) => setMovieName(e.target.value)}
            />
            <button>Search</button>
         </form>
         <section className="movies-container">
            {movies && movies.length
               ? movies.map((movie) => {
                    const { Title, Year, Poster, imdbID } = movie;
                    return (
                       <article key={imdbID}>
                          <h2>{Title}</h2>
                          <h3>{Year}</h3>
                          <img src={Poster} alt={Title} />
                       </article>
                    );
                 })
               : null}
         </section>
      </div>
   );
}
export default App;
