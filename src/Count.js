import React, { useReducer } from "react";

 const initialValue = {
    value : 0,
 };

 const reducer = (state,action) =>{
    switch(action.type){
        case "Add" : 
        return {value : state.value + 1};
        case "Remove" : 
        return {value : state.value - 1};
        default :
        return state;
    }
 }
const Count = () =>{

    const [count,dispatch] = useReducer(reducer,initialValue);
    return(
        <div style={{display : "flex"}}>
        <button onClick={() => dispatch({type : "Remove"})}>Decrement</button>
        <h2>Count : {count.value}</h2>
        <button onClick={() => dispatch({type : "Add"})}>Increment</button>
        </div>
    )
}

export default Count;