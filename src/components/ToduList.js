import React from 'react'
import './ToduList.css'
import successicon from '../assets/successicon.png'
import { useSelector , useDispatch } from 'react-redux';
import { deleteTodo , completedTodo } from '../redux/todoSlice';

function ToduList() {
  const select = useSelector((state)=> state.todo )
  const dispatch = useDispatch()

  function isCompleted(item){
    return item.complete === true? "#28a745" : "transparent";
  }
  const deleteT = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <div className='ToduList'>
      <table>
        {select?.map((item)=>{
          return(
            <div className='tableCondainer' key={item.id} style={{backgroundColor:isCompleted(item)}}>
              <tr>
                <td style={{width:"10%"}}>{item.complete ? <img src={successicon} alt='success' style={{width:'20px'}}/>:<input type="checkbox" id={item.id} name={item.todo} Checked={item.completed} onChange={()=>{
                 dispatch(completedTodo(item.id))
                }} />}</td>
                <td style={{width:"90%"}}>{item.text}</td>
                <td><button className='Deletebtn'onClick={()=>deleteT(item.id)}>Delete</button></td>
              </tr>
            </div>)
        })}
      </table>
    </div>
  )
}

export default ToduList