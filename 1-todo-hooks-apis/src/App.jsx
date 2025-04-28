import { useState } from "react";
import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";

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

function App() {
   const [taskName, setTaskName] = useState("");
   const [tasks, setTasks] = useState(mocksTasks);

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
