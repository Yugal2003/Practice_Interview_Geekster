// Summary =>  
// pahela useeffect thi fetch api call karo
// pachii setFetchData ma data push karo fetch mathi aavela
// itemperpage banavo &  [currentPage,setCurrentPage] = useState(1) pan banavo
// indexOfLastItem indexOfFirstItem & perPageItem banavo & paginate pan
// totalPages &  pageButtons & for loop pan
// two button pan & pagebuttons array pan pass karo
// perPageItem.map karo 


// Run The Code =>useeffect thi fetch api thase pachhi setgecthdata ma data jase and aapne prev button par click karsu to  paginate(currentPage - 1) thase and currentPage ek minus thase and check karse ke currentPage === 1 chhe to te disabled thai jase aevi j rite next ma pan plus thavathi te check karse ke disabled={currentPage === totalPages} chhe ke nahi   pachi aapne 2 page par click karsu to {pageButtons} thi  for (let i = 1; i <= totalPages; i++) thase and click thi paginate(2) 2 ma  2 page number jase and pachhi paginate change thavathi currentPage change thase and indexOfLastItem,indexOfFirstItem & perPageItem pan change thase jethi perPageItem na map data j aavse jem ke 2 page parna 8 thi 15 sudhina data j aavse
// import React, { useEffect, useState } from 'react'
// import './Practice.css'

// const Practice = () => {

//     const [data,setData] = useState([]);

//     const fetchApi = async () => {
//       try {
//         const result = await fetch('https://fakestoreapi.com/products');
//         const jsondata = await result.json();
//         console.log(jsondata);
//         setData(jsondata);
//       }   
//       catch (error) {
//         console.log(error);
//       } 
//     }

//     useEffect(() => {
//       fetchApi();
//     },[]);

//   const itemperpage = 8;
//   const [currpage,setCurrpage] = useState(1);

//   const lastIndex = itemperpage * currpage;
//   const fisrtIndex = lastIndex - itemperpage;
//   const perPageItem = data.slice(fisrtIndex,lastIndex);

//   const paginate = currpage => setCurrpage(currpage);

//   const totalPages = Math.ceil(data.length / itemperpage);
//     const pageArray = []
//   for(let i=1;i<=totalPages;i++){
//     pageArray.push(
//       <button onClick={() => paginate(i)} >{i}</button>
//     )
//   }
//   return (
//     <div>
//         <div style={{textAlign:"center"}}>
//           <button disabled={currpage === 1} onClick={() => paginate(currpage - 1)}>Prev</button>
//           {pageArray}
//           <button disabled={currpage === totalPages} onClick={() => paginate(currpage + 1)}>Next</button>
//         </div>
//         {
//           perPageItem.map((item) => {
//             return(
//               <div className='div' key={item.id}>
//                 <p>{item.id}</p>
//                 <img src={item.image} alt='img' width={"100px"} height={"100px"} />
//                 <p>{item.price}</p>
//               </div>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default Practice



// import React, { useState } from 'react'
// import { useEffect } from 'react'

// const Practice = () => {

//   const [data,setData] = useState([]);

//   useEffect(() => {
//     const fetchApi = async() =>{
//       try {
//         const data = await fetch("https://fakestoreapi.com/products");
//         const jsondata = await data.json();
//         console.log(jsondata);
//         setData(jsondata)
//       } 
//       catch (error) {
//         console.log(error);  
//       }
//     }
//     fetchApi();
//   },[]);

//   const itemperpage = 6;
  
//   const [currentPage,setCurrentPage] = useState(1);

//   const lastIndex = itemperpage * currentPage;
//   const fisrtIndex = lastIndex - itemperpage;
//   const perPageItem = data.slice(fisrtIndex,lastIndex);
  
//   const paginate = currentPage => setCurrentPage(currentPage);

//   const totalPages = Math.ceil(data.length / itemperpage);

//   const pageArray = [];

//   for(let i=1;i<=totalPages;i++){
//     pageArray.push(
//       <button key={i} onClick={() =>paginate(i)}>{i}</button>
//     )
//   }

//   return (
//     <div>
//       <div>
//         <button disabled={currentPage === 1} onClick={() =>paginate((currentPage) => currentPage  - 1)}>Prev</button>
//         {pageArray}
//         <button disabled={currentPage === totalPages} onClick={() =>paginate((currentPage) => currentPage  + 1)}>Next</button>
//       </div>
//         {
//           perPageItem.map((da,index) => {
//             return(
//               <div style={{display:"inline-block",width:"28%",margin:"auto",gap:"1rem",border:"1px solid red"}} key={index}>
//                   <p>{da.id}</p>
//                   <p>{da.category}</p>
//                   <img width={"50px"} src={da.image} alt=''/>
//                   <p>{da.price}</p>
//               </div>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default Practice


