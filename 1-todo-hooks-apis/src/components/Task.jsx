function Task({ tasks, handleComplete, handleDelete }) {
   return (
      <>
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
export default Task;
