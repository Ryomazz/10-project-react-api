import {
   createContext,
   useContext,
   useEffect,
   useReducer,
   useState,
} from "react";
import reducer from "./utils/reducer";
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

function AppContext({ children }) {
   const [tasks, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("tasksLS"))
   );
   const [taskName, setTaskName] = useState("");

   useEffect(() => {
      localStorage.setItem("tasksLS", JSON.stringify(tasks));
   }, [tasks]);

   const handleAdd = (e) => {
      e.preventDefault();
      setTaskName("");
      dispatch({ type: "ADD_TASK", taskName });
   };
   const handleDelete = (id) => {
      dispatch({ type: "DELETE_TASK", id });
   };
   const handleComplete = (id) => {
      dispatch({ type: "COMPLETE_TASK", id });
   };

   return (
      <TodoContext.Provider
         value={{
            tasks,
            dispatch,
            handleAdd,
            handleDelete,
            handleComplete,
            taskName,
            setTaskName,
         }}
      >
         {children}
      </TodoContext.Provider>
   );
}

export default AppContext;
