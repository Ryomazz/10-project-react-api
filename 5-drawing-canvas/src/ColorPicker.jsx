import { useCanvasContext } from "./AppContext";

const colors = [
   "black",
   "white",
   "blue",
   "green",
   "yellow",
   "pink",
   "red",
   "brown",
   "grey",
];

function ColorPicker() {
   const { setColor } = useCanvasContext();
   return (
      <section className="color-picker">
         {colors.map((color) => {
            return (
               <article
                  key={color}
                  className="color"
                  style={{ backgroundColor: color }}
                  onClick={() => setColor(color)}
               ></article>
            );
         })}
      </section>
   );
}
export default ColorPicker;
