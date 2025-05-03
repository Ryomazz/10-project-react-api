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

function AppContext({ children }) {
   const [tasks, dispatch] = useReducer(
      reducer,
      JSON.parse(localStorage.getItem("tasksLS"))
         ? JSON.parse(localStorage.getItem("tasksLS"))
         : []
   );
   const [taskName, setTaskName] = useState("");
   const [selected, setSelected] = useState(null);
   const [darkLightMode, setDarkLightMode] = useState(
      JSON.parse(localStorage.getItem("dark-light"))
   );

   useEffect(() => {
      localStorage.setItem("dark-light", JSON.stringify(darkLightMode));
   }, [darkLightMode]);

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
            selected,
            setSelected,
            darkLightMode,
            setDarkLightMode,
         }}
      >
         {children}
      </TodoContext.Provider>
   );
}

export default AppContext;
