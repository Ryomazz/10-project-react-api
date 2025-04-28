import { useState } from "react";
import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";
import { useTodoContext } from "./AppContext";

function App() {
   const [taskName, setTaskName] = useState("");
   const { tasks, dispatch } = useTodoContext();

   const handleAdd = (e) => {
      e.preventDefault();
      setTaskName("");
      dispatch({ type: "ADD_TASK", taskName });
   };
   const handleDelete = (id) => {
      dispatch({ type: "DELETE_TASK", id });
   };
   const handleComplete = (id) => {
      dispatch({ type: "COMPLETE_TASK" });
      console.log("Completed", id);
   };

   return (
      <>
         <h1>Nice Todo App</h1>
         <AddTaskBar
            taskName={taskName}
            setTaskName={setTaskName}
            handleAdd={handleAdd}
         />
         <Task
            tasks={tasks}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
         />
      </>
   );
}
export default App;
