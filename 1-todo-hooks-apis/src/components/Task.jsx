import { useEffect, useState } from "react";
import { useTodoContext } from "../AppContext";
import "./Task.css";

function Task() {
   const { handleDelete, handleComplete, tasks, selected, dispatch } =
      useTodoContext();
   const [filteredTask, setFilteredTask] = useState(tasks);

   const handleDragStart = (e, id) => {
      e.dataTransfer.setData("text/plain", id);
   };

   const handleDragEnd = (e) => {
      console.log(e.target);
   };

   const handleDragOver = (e) => {
      e.preventDefault();
   };

   const handleDrop = (e, id) => {
      e.preventDefault();

      const actualId = e.dataTransfer.getData("text/plain");
      dispatch({ type: "DRAG_TASK", actualId, previousId: id });
   };

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
      <section className="tasks-container">
         {filteredTask && filteredTask.length
            ? filteredTask.map((task) => {
                 const { id, name, completed } = task;
                 return (
                    <article
                       key={id}
                       className={`task ${completed ? "completed" : null}`}
                       draggable="true"
                       onDragStart={(e) => handleDragStart(e, id)}
                       onDragEnd={handleDragEnd}
                       onDragOver={handleDragOver}
                       onDrop={(e) => handleDrop(e, id)}
                    >
                       <h3>{name}</h3>
                       <div className="button-container">
                          <button onClick={() => handleDelete(id)}>🗑️</button>
                          <button onClick={() => handleComplete(id)}>👌</button>
                       </div>
                    </article>
                 );
              })
            : null}
      </section>
   );
}
export default Task;
