const reducer = (state, action) => {
   if (action.type === "ADD_TASK") {
      const newTask = {
         id: crypto.randomUUID(),
         name: action.taskName,
         completed: false,
      };

      console.log();
      return [...state, newTask];
   }

   if (action.type === "DELETE_TASK") {
      const withoutTask = state.filter((task) => task.id !== action.id);
      return withoutTask;
   }

   if (action.type === "COMPLETE_TASK") {
      return state;
   }
};

export default reducer;
