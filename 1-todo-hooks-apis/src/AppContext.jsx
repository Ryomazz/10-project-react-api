import { createContext, useContext, useEffect, useReducer } from "react";

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

/*const mocksTasks = [
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
]; */

const reducer = (state, action) => {
   if (action.type === "ADD_TASK") {
      const newTask = {
         id: crypto.randomUUID(),
         name: action.taskName,
         completed: false,
      };

      console.log();
      return [...state, newTask];
   }

   if (action.type === "DELETE_TASK") {
      const withoutTask = state.filter((task) => task.id !== action.id);
      return withoutTask;
   }

   if (action.type === "COMPLETE_TASK") {
      return state;
   }
};

function AppContext({ children }) {
   const [tasks, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("tasksLS"))
   );
   useEffect(() => {
      localStorage.setItem("tasksLS", JSON.stringify(tasks));
   }, [tasks]);
   return (
      <TodoContext.Provider value={{ tasks, dispatch }}>
         {children}
      </TodoContext.Provider>
   );
}

export default AppContext;
