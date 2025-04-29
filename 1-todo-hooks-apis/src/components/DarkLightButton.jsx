import { useEffect } from "react";
import { useTodoContext } from "../AppContext";

function DarkLightButton() {
   const { darkLightMode, setDarkLightMode } = useTodoContext();

   useEffect(() => {
      console.log(JSON.parse(localStorage.getItem("dark-light")));
   }, [darkLightMode]);

   return (
      <section>
         <button
            style={{ cursor: "pointer" }}
            onClick={() => setDarkLightMode(!darkLightMode)}
            className="dark-light-button"
         >
            {darkLightMode ? "☀️" : "🌑"}
         </button>
      </section>
   );
}
export default DarkLightButton;
