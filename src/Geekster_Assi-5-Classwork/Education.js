// import React from 'react'
// import { useState } from 'react'
// import CardDetails from './CardDetails'

// const Education = () => {
//     const [subject,setSubject] = useState('');
//     const [hour,setHour] = useState('');

//     const [record,setRecord] = useState([]);

//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         const newRecord = {subject,hour};
//         setRecord([...record,newRecord]);
//         setSubject("")
//         setHour("")
//     }

//     const handleDelete = (id) => {
//         setRecord(record.filter((item,index) => index !== id))
//     }

//     const handleRemoveAll = () =>{
//         setRecord([])
//     }
//   return (
//     <div style={{display:"flex",flexDirection:"column",marginTop:"2rem",height:"200px",justifyContent:"center",alignItems:"center"}}>
//         <div style={{display : "flex",gap:"2rem"}}>
//             <h1>Geekster Platform</h1>
//             <button onClick={handleRemoveAll}>Remove All Cart</button>
//         </div>
//         <div style={{marginTop:"2rem"}}>
//             <label>Subject :</label>
//             <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)}/>
//             <label>Hour :</label>
//             <input type='text' value={hour} onChange={(e) => setHour(e.target.value)}/>
//             <button onClick={handleSubmit}>Add</button>
//         </div>
//         {
//             record.map((item,index) => {
//                 return(
//                     <CardDetails index={index} id={index} subject={item.subject} hour={item.hour} deleteItem={handleDelete}/>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Education





// just practice

import React from 'react'
import { useState } from 'react'
import CardDetails from './CardDetails'

const Education = () => {

    const [subject,setSubject] = useState("");
    const [hour,setHour] = useState("");
    const [record,setRecord] = useState([]);

    const clickHandle = () =>{
        console.log(hour,subject);
        let newRecord = {subject,hour};
        setRecord([...record,newRecord]);
        setHour("");
        setSubject("");
    }

    const handleDelete = (id) =>{
        setRecord(record.filter((rec,index) => index !== id))
    }
  return (
    <div>
        <div>
            <h1>Geekster Education</h1>
            <label>Subject</label>
            <input type='text' value={subject} onChange={(e) =>setSubject(e.target.value)}/><br></br>
            <label>Hour</label>
            <input type='text' value={hour} onChange={(e) => setHour(e.target.value)}/><br></br>
            <button onClick={clickHandle}>Add</button>
        </div>
        {
           record.map((item,index) => (
            <CardDetails key={index} id={index} subject={item.subject} clikDelete={handleDelete} hour={item.hour} setRecord={setRecord}/>
           ))
        }
    </div>
  )
}

export default Education