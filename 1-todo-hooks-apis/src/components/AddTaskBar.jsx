function AddTaskBar({ taskName, setTaskName, handleAdd }) {
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
