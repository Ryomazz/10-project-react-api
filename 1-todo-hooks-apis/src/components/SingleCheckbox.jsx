import { useTodoContext } from "../AppContext";

function SingleCheckbox() {
   const options = ["Completed", "Pending"];
   const { selected, setSelected } = useTodoContext();

   const handleChange = (option) => {
      setSelected(selected === option ? null : option);
   };

   return (
      <div className="checkbox-container">
         {options.map((option) => {
            return (
               <div key={option}>
                  <label>
                     <input
                        type="checkbox"
                        checked={selected === option}
                        onChange={() => handleChange(option)}
                     />
                     {option}
                  </label>
               </div>
            );
         })}
      </div>
   );
}
export default SingleCheckbox;
