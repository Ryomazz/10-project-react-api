import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

const mocksTasks = [
   {
      id: crypto.randomUUID(),
      name: "Do Homework",
      completed: false,
   },
   {
      id: crypto.randomUUID(),
      name: "Run 10km",
      completed: true,
   },
   {
      id: crypto.randomUUID(),
      name: "Buy coffee",
      completed: false,
   },
];

function AppContext({ children }) {
   const [tasks, setTasks] = useState(mocksTasks);

   return (
      <TodoContext.Provider value={{ tasks, setTasks }}>
         {children}
      </TodoContext.Provider>
   );
}

export default AppContext;
