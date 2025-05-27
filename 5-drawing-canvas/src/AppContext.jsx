import { createContext, useContext, useState } from "react";

const CanvasContext = createContext();
export const useCanvasContext = () => useContext(CanvasContext);

function AppContext({ children }) {
   const [color, setColor] = useState("black");
   const [lineWidth, setLineWidth] = useState(5);
   return (
      <CanvasContext.Provider
         value={{ color, setColor, lineWidth, setLineWidth }}
      >
         {children}
      </CanvasContext.Provider>
   );
}
export default AppContext;
