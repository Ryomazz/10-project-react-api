import Weather from "../components/Weather";
import Search from "../components/Search";
import "../components/Weather.css";

function App() {
   return (
      <div className="container">
         <Search />
         <Weather />
      </div>
   );
}
export default App;
