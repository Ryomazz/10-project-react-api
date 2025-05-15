const reducer = (state, action) => {
   if (action.type === "ADD_TASK") {
      if (!action.taskName.trim()) return state;
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
      const newState = state.map((task) => {
         return task.id === action.id
            ? { ...task, completed: !task.completed }
            : task;
      });
      return newState;
   }

   if (action.type === "DRAG_TASK") {
      const { actualId, previousId } = action;
      if (previousId === null) return state;

      const selectedTask = state.indexOf(
         state.find((task) => task.id === actualId)
      );
      const previousTask = state.indexOf(
         state.find((task) => task.id === previousId)
      );

      const newState = [...state];
      [newState[previousTask], newState[selectedTask]] = [
         newState[selectedTask],
         newState[previousTask],
      ];
      return newState;
   }
};

export default reducer;
