import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement,updateValue } from './Slice';

const Counter = () => {
    const count = useSelector((state) => state.counterSlice.value);
    const dispatch = useDispatch();
    const [value,setValue] = useState();

  return (
    <div>
        <button onClick={() => {dispatch(decrement())}}>Decrement</button>
        <p>Count : {count}</p>
        <button onClick={() => {dispatch(increment())}}>Increment</button>
        <hr/>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => {dispatch(updateValue(value))}}>Update</button>
    </div>
  )
}

export default Counter