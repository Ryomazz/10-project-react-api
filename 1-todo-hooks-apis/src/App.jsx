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
    completed:false
  }, {
    id: crypto.randomUUID(),
    name: "",
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