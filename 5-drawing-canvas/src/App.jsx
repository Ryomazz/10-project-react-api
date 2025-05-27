import { useRef, useState } from "react";
import { useCanvasContext } from "./AppContext";
import ColorPicker from "./ColorPicker";
import LineWidthPicker from "./LineWidthPicker";
import ClearButton from "./ClearButton";
import DownloadDraw from "./DownloadDraw";
function App() {
   const canvasRef = useRef(null);
   const [isDrawing, setIsDrawing] = useState(false);
   const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
   const { color, lineWidth } = useCanvasContext();

   const startDrawing = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setIsDrawing(true);
      setLastPos({ x, y });
   };

   const draw = (e) => {
      if (!isDrawing) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ctx.beginPath();
      ctx.moveTo(lastPos.x, lastPos.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      setLastPos({ x, y });
   };

   const stopDrawing = () => {
      setIsDrawing(false);
   };

   return (
      <section>
         <h1>Canva Draw App</h1>
         <canvas
            ref={canvasRef}
            className="canvas"
            width={500}
            height={500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
         ></canvas>
         <ClearButton canvasRef={canvasRef} />
         <ColorPicker />
         <LineWidthPicker />
         {canvasRef && <DownloadDraw canvasRef={canvasRef} />}
      </section>
   );
}
export default App;
