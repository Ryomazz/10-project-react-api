import { useEffect, useState } from "react";
import { useTodoContext } from "../AppContext";
import "./Task.css";

function Task() {
   const { handleDelete, handleComplete, tasks, selected } = useTodoContext();
   const [filteredTask, setFilteredTask] = useState(tasks);

   useEffect(() => {
      if (selected === "Completed") {
         setFilteredTask(tasks.filter((task) => task.completed));
         return;
      }
      if (selected === "Pending") {
         setFilteredTask(tasks.filter((task) => !task.completed));
         return;
      }
      setFilteredTask(tasks);
   }, [selected, tasks]);

   return (
      <>
         {filteredTask && filteredTask.length
            ? filteredTask.map((task) => {
                 const { id, name, completed } = task;
                 return (
                    <article
                       key={id}
                       className={completed ? "completed" : null}
                    >
                       <h3>{name}</h3>
                       <button onClick={() => handleDelete(id)}>Delete</button>
                       <button onClick={() => handleComplete(id)}>
                          Complete
                       </button>
                    </article>
                 );
              })
            : null}
      </>
   );
}
export default Task;
