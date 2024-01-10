import { createSlice } from "@reduxjs/toolkit";
const tasks = [
        {id:1 , text:"todo1" , complete:true},
        {id:2 , text:"todo2" , complete:false},
        {id:3 , text:"todo3" , complete:true},
        {id:4 , text:"todo4" , complete:false}
    ]
const todoSlice = createSlice({
    name:"Todo",
    initialState : tasks ,
    reducers:{
        addTodo : ( state , action )=>{
            state.push({ 
                id: state.length? state[state.length - 1].id + 1 : 1 ,
                text : action.payload ,
                completed:false
            })
        },
        deleteTodo : ( state , action )=>{
            return state.filter((task)=> task.id !== action.payload )
        },
        completedTodo : ( state , action )=>{
            let element = state.find(x=>x.id === action.payload )
            element.completed = true;
        }
    }
})
export const { addTodo, deleteTodo , editTodo,completedTodo } = todoSlice.actions;
export default todoSlice.reducer;