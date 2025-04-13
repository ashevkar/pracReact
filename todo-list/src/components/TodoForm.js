import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(input);

        setInput("")
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" 
        className='todo-input'
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)} />
        <button className="todo-btn " type="submit" >Add Task</button>
    </form>
  )
}
