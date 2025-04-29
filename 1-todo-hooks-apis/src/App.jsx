import Task from "./components/Task";
import AddTaskBar from "./components/AddTaskBar";
import SingleCheckbox from "./components/SingleCheckbox";
import DarkLightButton from "./components/DarkLightButton";
import { useTodoContext } from "./AppContext";

function App() {
   const { darkLightMode } = useTodoContext();
   return (
      <div className={`wrapper ${darkLightMode ? null : "light"}`}>
         <div className="container">
            <DarkLightButton />
            <h1>Nice Todo App</h1>
            <AddTaskBar />
            <SingleCheckbox />
            <Task />
         </div>
      </div>
   );
}
export default App;
