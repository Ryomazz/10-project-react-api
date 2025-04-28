import { useTodoContext } from "../AppContext";
import "./Task.css";

function Task() {
   const { tasks, handleDelete, handleComplete, isFiltered } = useTodoContext();
   const filteredTask = isFiltered
      ? tasks.filter((task) => task.completed === true)
      : tasks;

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
