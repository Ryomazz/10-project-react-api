import { useEffect, useState } from "react";

function App() {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState("");

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

         setMovies(data.Search);
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
         <section className="movies-container">
            {movies && movies.length
               ? movies.map((movie) => {
                    const { Title, Year, Poster, imdbID } = movie;
                    return (
                       <article key={imdbID} className="movie">
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
