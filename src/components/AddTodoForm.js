import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'
import './AddTodoForm.css'

function AddTodoForm() {  
  const dispatch = useDispatch()
  const adding = (e)=>{
    e.preventDefault()
    dispatch(addTodo(e.target.todoText.value))
    e.target.todoText.value = ""
  }
  return (
    <div className='AddTodoForm'>
        <h1>My Todo List</h1>
        <form onSubmit={ (e)=>adding(e) }>
            <input type='text' placeholder='Add Your Todo' name='todoText' required/><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddTodoForm