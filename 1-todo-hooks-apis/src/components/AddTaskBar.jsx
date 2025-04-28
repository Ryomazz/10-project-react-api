import { useTodoContext } from "../AppContext";

function AddTaskBar() {
   const { handleAdd, taskName, setTaskName } = useTodoContext();
   return (
      <>
         <form>
            <input
               type="text"
               placeholder="Things to do..."
               value={taskName}
               onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAdd}>+</button>
         </form>
      </>
   );
}
export default AddTaskBar;
