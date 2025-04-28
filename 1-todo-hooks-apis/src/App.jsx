import { useState } from "react";

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
   const handleComplete = () => {};

   return (
      <>
         <h1>Nice Todo App</h1>
         <form>
            <input
               type="text"
               placeholder="Things to do..."
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAdd}>+</button>
         </form>
         {tasks && tasks.length
            ? tasks.map((task) => {
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
export default App;
