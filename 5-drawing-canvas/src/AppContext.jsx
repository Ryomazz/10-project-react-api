import { createContext, useContext, useState } from "react";

const CanvasContext = createContext();
export const useCanvasContext = () => useContext(CanvasContext);

function AppContext({ children }) {
   const [color, setColor] = useState();
   return (
      <CanvasContext.Provider value={{ color, setColor }}>
         {children}
      </CanvasContext.Provider>
   );
}
export default AppContext;
