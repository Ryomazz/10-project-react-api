import { useEffect } from "react";
import { useTodoContext } from "../AppContext";

function DarkLightButton() {
   const { darkLightMode, setDarkLightMode } = useTodoContext();

   useEffect(() => {
      console.log(JSON.parse(localStorage.getItem("dark-light")));
   }, [darkLightMode]);

   return (
      <section className="dark-light-button">
         <button
            style={{ cursor: "pointer" }}
            onClick={() => setDarkLightMode(!darkLightMode)}
         >
            {darkLightMode ? "☀️" : "🌑"}
         </button>
      </section>
   );
}
export default DarkLightButton;
