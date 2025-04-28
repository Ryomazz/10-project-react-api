import { useState } from "react";
import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";
import { useTodoContext } from "./AppContext";

function App() {
   const [taskName, setTaskName] = useState("");
   const { tasks, setTasks } = useTodoContext();

   const handleAdd = (e) => {
      e.preventDefault();
      const newTask = {
         id: crypto.randomUUID(),
         name: taskName,
         completed: false,
      };
      setTasks([...tasks, newTask]);
   };
   const handleDelete = (id) => {
      const withoutTask = tasks.filter((task) => task.id !== id);
      setTasks(withoutTask);
   };
   const handleComplete = (id) => {
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
