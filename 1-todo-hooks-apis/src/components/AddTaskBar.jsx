import { useTodoContext } from "../AppContext";

function AddTaskBar() {
   const { handleAdd, taskName, setTaskName, setIsFiltered, isFiltered } =
      useTodoContext();
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
            <label htmlFor="dones">Completed Tasks</label>
            <input
               type="checkbox"
               name="dones"
               id="dones"
               onClick={() => setIsFiltered(!isFiltered)}
            />
         </form>
      </>
   );
}
export default AddTaskBar;
