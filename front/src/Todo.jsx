import React from 'react'
import { useState } from 'react'

const Todo = () => {
  const [todo,setTodo]=useState({});
  const [todos,setTodos]=useState([]);
  return (
    <>
    <h3>Todo App</h3>
     <form   onSubmit={(e)=>handleSubmit(e)}>
      <input onChange={(e)=>handleChange(e)} name="todo" type={'text'}  placeholder="todo add"/>
      <button>Add Todo</button>
     </form>
    </>
  )
}

export default Todo