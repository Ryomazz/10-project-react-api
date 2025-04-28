import { useState } from "react";
import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";
import { useTodoContext } from "./AppContext";

function App() {
   return (
      <>
         <h1>Nice Todo App</h1>
         <AddTaskBar />
         <Task />
      </>
   );
}
export default App;
