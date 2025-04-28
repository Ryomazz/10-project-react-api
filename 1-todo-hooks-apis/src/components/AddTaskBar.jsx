import { useTodoContext } from "../AppContext";

function AddTaskBar() {
   const { handleAdd, taskName, setTaskName, darkLightMode } = useTodoContext();
   return (
      <>
         <form className="add-bar">
            <input
               type="text"
               placeholder="Things to do..."
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
               className={darkLightMode ? "" : "light"}
            />
            <button onClick={handleAdd}>+</button>
         </form>
      </>
   );
}
export default AddTaskBar;
