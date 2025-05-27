import { useCanvasContext } from "./AppContext";

const linesWidths = [1, 3, 5, 7, 10, 13, 15];

function LineWidthPicker() {
   const { setLineWidth, color } = useCanvasContext();
   return (
      <section className="line-picker">
         {linesWidths.map((line) => {
            return (
               <article
                  key={line}
                  className="line"
                  onClick={() => setLineWidth(line)}
               >
                  <div
                     className="lineWidth"
                     style={{ height: line, backgroundColor: color }}
                  ></div>
               </article>
            );
         })}
      </section>
   );
}
export default LineWidthPicker;
