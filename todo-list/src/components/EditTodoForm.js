import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,tasks}) => {
    const [input, setInput] = useState(tasks.tasksa);

    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(input, tasks.id );
        setInput("")
    }

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
        <input type="text" 
        className='todo-input'
        value={input}
        placeholder="Update task"
        onChange={(e) => setInput(e.target.value)} />
        <button className="todo-btn " type="submit" >Edit Task</button>
    </form>
  )
}
