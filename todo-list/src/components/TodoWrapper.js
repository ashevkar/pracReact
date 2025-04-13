import React,{useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo} from './Todo'
import {v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([...todos, {id: uuidv4(), 
                            tasksa: todo, 
                            completed: false, 
                            isEditing: false}
                ])
        console.log(todos);
    }
    const toggleComplete = id =>{
        setTodos(todos.map(todo =>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed}
                }
                return todo;
                }))
                }

        // setTodos(todos.map(todo => todo.id === id ?
        //     {...todo , completed: !todo.completed} : todo))
        //     console.log(todos);
        // }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, isEditing : !todo.Editing} :todo
        ))
    }
    const editTask = (tasks , id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, tasks, isEditing: !todo.isEditing} : todo))
        }
    
    
   
     
  return (
    <div className='TodoWrapper'>
        <h1>Get things done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo,index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} tasks={todo} />
            ) :
            (
                <Todo tasks={todo} 
                key={index}
                toggleComplete={toggleComplete}
                deleteTodo= {deleteTodo}
                editTodo={editTodo}/>
            )
        ))}
    </div>
    )
}