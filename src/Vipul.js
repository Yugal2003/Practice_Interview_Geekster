// import React, { useState } from "react";
// import './Vipul.css'

// const Vipul = () =>{
//     const [count,setCount] = useState("Content for Tab 1");

//     const handleClick1 = () =>{
//         return `Content for Tab 1`;
//     }
//     const handleClick2 = () =>{
//         return `Content for Tab 2`;
//     }
//     const handleClick3 = () =>{
//         return `Content for Tab 3`;
//     }
//     return(
//         <div>
//             {count}
//             <button onClick={() => setCount(handleClick1)}>Click 1</button>
//             <button onClick={() => setCount(handleClick2)}>Click 2</button>
//             <button onClick={() => setCount(handleClick3)}>Click 3</button>
//         </div>
//     )
// }

// const [data,setData] = useState("Home");

// const array = [
//     {
//         id : "Home"
//     },
//     {
//         id : "About"
//     },
//     {
//         id : "Contact"
//     }
// ]


// return(
//     <>
//     <h1>Custom Tabs</h1>
//     {
//         array.map((item) =>{
//             return(
//                 <button key={item.id} onClick={() => setData(item.id)}>{item.id}</button>
//             )
//         })
//     }
//     <div>Tab content for {data}</div>
//     </>
// )

// }
// export default Vipul;
