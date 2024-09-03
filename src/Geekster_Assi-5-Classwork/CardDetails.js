// import React, { useState } from 'react'

// const CardDetails = ({subject,hour,id,deleteItem}) => {
//     const [hourValue,setHourValue] = useState(hour)

//   return (
//     <div>
//        <p>Subject : {subject}</p>
//        <p>Hour : {hourValue}</p>
//        <button onClick={() => setHourValue(parseInt(hourValue) - 1)}>-</button>
//        <button onClick={() => setHourValue(parseInt(hourValue) + 1)}>+</button>
//        <button onClick={() => deleteItem(id)}>Remove</button>
//     </div>
//   )
// }

// export default CardDetails


import React, { useState } from 'react'

const CardDetails = ({subject,hour,id,clikDelete}) => {

  const [hourValue,setHourValue] = useState(hour)
  return (
    <div>
      <p>Subject : {subject}</p>
      <p>Hour : {hourValue}</p>
      <button onClick={() =>setHourValue(parseInt(hourValue) - 1)}>-</button>
      <button onClick={() =>setHourValue(parseInt(hourValue) + 1)}>+</button>
      <button onClick={() =>clikDelete(id)}>Delete</button>
    </div>
  )
}

export default CardDetails