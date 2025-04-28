import React from 'react'
import { useState } from 'react'

const mocksTasks = [
  {
    id: crypto.randomUUID(),
    name: "Do Homework",
    completed:false
  }, {
    id: crypto.randomUUID(),
    name: "Run 10km",
    completed:true
  }, {
    id: crypto.randomUUID(),
    name: "Buy coffee",
    completed:false
  }
]



const App = () => {
  const [taskName, setTaskName] = useState("")
  const [tasks, setTaks] = useState(mocksTasks)

  const handleAdd = () => {
    e.preventDefault()
    console.log(taskName)
  }
  const handleDelete = () => {}
  const handleComplete = () => {}
  return (
    <div>
      <h1>A Nice todo List</h1>
      <form>
        <input type="text" placeholder='Things to do...' onChange={(e)=> setTaskName(e.target.value)} value={taskName}/>
        <button onClick={handleAdd}>+</button>
      </form>
      {tasks && tasks.length 
      ? tasks.map((task)=> {
        const {id, name, completed} = task;
        return <article key={id}>
          <h3>{name}</h3>
          <button>Complete</button>
          <button>Delete</button>
        </article>
      }) 
      : null
      }
    </div>
  )
}

export default App