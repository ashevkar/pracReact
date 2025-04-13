import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({tasks, toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>

        <p onClick={() => toggleComplete(tasks.id)}
         className = {`${tasks.completed ? 'completed' : ""}`}> {tasks.tasksa}</p>
        <div>
            <FontAwesomeIcon icon={ faPenToSquare } onClick={() => editTodo(tasks.id)}/>    
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(tasks.id)}/>
        </div>
    </div>
  )
}
