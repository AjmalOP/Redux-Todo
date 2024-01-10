import React from 'react'
import './TotalCompleteItems.css'
import { useSelector } from 'react-redux'

function TotalCompleteItems() {
  const select = useSelector((state)=> state.todo )
  const done = select.filter((item)=>item.completed === true)
  return (
    <div className='TotalCompleteItems'>
        <h3>Total Completed Items : {done?.length}</h3>
    </div>
  )
}

export default TotalCompleteItems