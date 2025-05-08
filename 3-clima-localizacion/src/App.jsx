import useFetchData from "../hooks/useFetchData";
import Weather from "../components/Weather";
import Search from "../components/Search";

function App() {
   return (
      <div className="container">
         <Search />
         <Weather />
      </div>
   );
}
export default App;
