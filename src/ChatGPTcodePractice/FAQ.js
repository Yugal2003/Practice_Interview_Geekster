// FAQ Component - React JS Interview Challenge - By Imran Shaikh(YOUTUBER) 


// import React, { useEffect, useState } from 'react'

// const FAQ = ({faq,index}) => {

//     const [isCheck,setIsCheck] = useState(false);

//     useEffect(()=>{
//         if(index === 0){
//             setIsCheck(true);
//         }
//     },[])

//     const handleClick = () =>{
//         setIsCheck((isCheck) => !isCheck)
//     }
//   return (
//     <div>
//         <div>
//             <div style={{display:"flex",gap:"1rem"}}>
//                 <button style={{transform : isCheck ?  "rotate(90deg)" : ""}} onClick={handleClick}> > </button>
//                 {faq.question}
//             </div>
//             <div style={{display:"flex",paddingLeft:"2rem"}}>
//                 {isCheck && faq.answer}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FAQ






// Custom Modal Overlay-React JS Interview Challenge - By Imran Shaikh(YOUTUBER) 



// import React from 'react'

// const FAQ = ({clickCross,acceptOffer}) => {

//     const handleDivClick = (e) =>{
//         console.log(e.target.className);
//         if(e.target.className === "div1"){
//             clickCross()
//         }
//     }

//   return (
//     <div>
//         <div className='div1' onClick={handleDivClick} style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",position:"relative"}}>
//             <div style={{backgroundColor:"pink",padding:"1rem",border:"1px solid black"}}>
//                 <div>
//                     <button onClick={clickCross}>X</button>
//                 </div>

//                 <div>
//                     <p>Click the button below to accept<br></br> out Amazing offer!</p>
//                 </div>

//                 <div>
//                     <button style={{backgroundColor:"purple",color:"white"}} onClick={acceptOffer}>Accept Offer</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FAQ