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
  const [tasks, setTaks] = useState([])
  return (
    <div>Todo List</div>
  )
}

export default App