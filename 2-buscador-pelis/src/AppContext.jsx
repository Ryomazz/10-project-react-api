import { Children, createContext, useContext, useState } from "react";

const SearchMovieContext = createContext();

export const useSearchMovieContext = () => useContext(SearchMovieContext);

function AppContext({ children }) {
   const [movies, setMovies] = useState([]);
   const [suggestions, setSuggestions] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [selectedMovie, setSelectedMovie] = useState("");

   const handleShowModal = (id) => {
      setShowModal(!showModal);
      setSelectedMovie(id);
   };

   return (
      <SearchMovieContext.Provider
         value={{
            movies,
            setMovies,
            suggestions,
            setSuggestions,
            showModal,
            setShowModal,
            selectedMovie,
            setSelectedMovie,
            handleShowModal,
         }}
      >
         {children}
      </SearchMovieContext.Provider>
   );
}
export default AppContext;
