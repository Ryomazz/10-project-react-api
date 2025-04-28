import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";
import SingleCheckbox from "./components/SingleCheckbox";

function App() {
   return (
      <>
         <h1>Nice Todo App</h1>
         <AddTaskBar />
         <SingleCheckbox />
         <Task />
      </>
   );
}
export default App;
