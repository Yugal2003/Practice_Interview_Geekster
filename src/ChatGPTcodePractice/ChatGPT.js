// 1.Counter Application:

// Question: Create a simple counter application where a button click increments the counter by 1. Display the current count.
// Hint: Use useState to manage the count state.


// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [count,setCount] = useState(0);

//   return (
//     <div>
//         <p>Count : {count}</p>
//         <button onClick={()=>setCount((c) => c+1)}>Increment</button>
//         <button onClick={()=>setCount((c) => c-1)}>Decrement</button>
//     </div>
//   )
// }

// export default ChatGPT


//2.Toggle Visibility:

// Question: Implement a component that toggles the visibility of a text paragraph when a button is clicked.
// Hint: Use useState to manage the visibility state (e.g., true or false).


// implement js in react 

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [toggle,setToggle] = useState(false);
//     const ptagvalue = document.querySelector('p');
//     const btn = document.querySelector('button');

//     if(toggle){
//         ptagvalue.style.display = 'block'
//         btn.textContent = "hide"
//     }
//     else{
//         ptagvalue.style.display = 'none'
//         btn.textContent = "show"
//     }
//   return (
//     <div>
//         <p className='ptag'>This is an Paragraph!</p>
//         <button onClick={()=>setToggle(!toggle)}>Toggle</button>
//     </div>
//   )
// }

// export default ChatGPT


//without js directly use chatgpt code more good

// import React, { useState } from 'react';

// const ChatGPT = () => {
//     const [toggle, setToggle] = useState(false);

//     return (
//         <div>
//             {toggle && <p className='ptag'>This is a Paragraph!</p>}
//             <button onClick={() => setToggle(!toggle)}>
//                 {toggle ? 'Hide' : 'Show'}
//             </button>
//         </div>
//     );
// }

// export default ChatGPT;


//3.Form Input Handling:

// Question: Create a form with a text input field. Display the input value below the input field as the user types.
// Hint: Use useState to store and update the input value.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [inputValue,setInputValue] = useState("")
//   return (
//     <div>
//         <form>
//             <label>Type : </label>
//             <input onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='Enter Your Text'/>
//         </form>
//         Output : {inputValue}
//     </div>
//   )
// }

// export default ChatGPT


//4.Multiple State Variables:

//Question: Build a simple form with two input fields, one for the user's first name and one for the last name. Display the full name below the form as the user types.
// Hint: Use useState for both first name and last name states.

// import React,{useState} from "react";

// const ChatGPT = () =>{
//     const [firstName,setFirstName] = useState("")
//     const [lastName,setLastName] = useState("")
//     return(
//         <div>
//              <form>
//                 <label>FirstName : </label>
//                 <input onChange={(e)=>setFirstName(e.target.value)} type='text' placeholder='Enter Your FirstName'/>
//                 <label>LastName : </label>
//                 <input onChange={(e)=>setLastName(e.target.value)} type='text' placeholder='Enter Your LastName'/>
//             </form>
//             Full Name : {firstName}&nbsp;&nbsp;{lastName}
//         </div>
//     )
// }

// export default ChatGPT;


//5.Conditional Rendering:

// Question: Create a component that displays "Hello, [name]!" if a name is entered in an input field, otherwise display "Hello, Guest!".
// Hint: Use useState to manage the name input value and conditionally render the greeting.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [name,setName] = useState("");

//   return (
//     <div>
//         <label>Name :</label>
//         <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Name :'/><br></br>
//         {name ? `Hello, ${name}!` : `Hello, Guest!`}
//     </div>
//   )
// }

// export default ChatGPT


// 6.List Management:

//Question: Implement a simple to-do list where you can add new items. The list should update and display each added item.
// Hint: Use useState to manage the array of to-do items.


// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [todo,setTodo] = useState([]);
//     const [addTodo,setAddTodo] = useState("");

//     const addItem = () =>{
//       setTodo([...todo,addTodo]);
//       setAddTodo("")
//     }
//   return (
//     <div>
//       <input value={addTodo} onChange={(e)=>setAddTodo(e.target.value)} type='text' placeholder='add text'/>
//       <button onClick={addItem}>Add Item</button>

//       {
//         todo.map((item,index) => {
//           return(
//               <div key={index}>
//                 <p>{item}</p>
//               </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ChatGPT


//  Only practice to-do list


// import React, { useState } from 'react'

// const ChatGPT = () => {

//     const [inputValue,setInputValue] = useState("");
//     const [array,setArray] = useState([]);

//     const clickHanlder = (e) => {
//         e.preventDefault();

//         if(inputValue !== ""){
//           const newArray = inputValue
//           setArray([...array,newArray]);
//           setInputValue("")
//         }
//         else{
//           alert("Enter InputValue !!!")
//         }
//     }

//     const clickDelete = (index) => {
//         const newArray = [...array];
//         newArray.splice(index,1);
//         setArray(newArray)
//     }

//     const deleteAll = () => {
//         setArray([])
//     }
//   return (
//     <div>
//         <form>
//             <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='text' placeholder='Add Items...'/>
//             <button onClick={clickHanlder}>Add</button>
//             &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={deleteAll}>Remove All</button>
//         </form>
//         {
//             array.map((item,index) => {
//                 return(
//                     <div style={{display:"flex",gap:"1rem",paddingBlock:"0.2rem"}}>
//                        <p > {index+1}</p>&nbsp;&nbsp;&nbsp;&nbsp;
//                        <p style={{width:"50px"}}>{item}</p>&nbsp;&nbsp;&nbsp;&nbsp;
//                        <button onClick={() => clickDelete(index)}>Delete</button>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default ChatGPT



//7.Checkbox State:

// Question: Create a form with a checkbox. When the checkbox is checked, display a message saying "Checked!" and when unchecked, display "Unchecked!".
// Hint: Use useState to manage the checkbox state.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [check,setCheck] = useState(false);

//   return (
//     <div>
//         <form>
//           <input checked={check} onChange={()=>setCheck(!check)} type='checkbox'/>  Click
//         </form>    
//         {
//           check ? "Checked!" : "Unchecked!"
//         }
//     </div>
//   )
// }

// export default ChatGPT


//8. Counter with Minimum and Maximum Limits:

// Question: Enhance the counter application to include minimum and maximum limits. Disable the increment button when the count reaches the maximum limit and disable the decrement button when the count reaches the minimum limit.
// Hint: Use useState for the count state and include logic to enforce the limits.

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [value,setValue] = useState(0)
//   return (
//     <div>
//         <button onClick={() => setValue((value) => value - 1)} disabled={value === 0}>Decrement</button>
//         {value}
//         <button onClick={() => setValue((value) => value + 1)} disabled={value === 5}>Increment</button>
//     </div>
//   )
// }

// export default ChatGPT


//9.Simulate a Light Switch:

// Question: Create a component that simulates a light switch. Clicking a button toggles the light between "On" and "Off".
// Hint: Use useState to manage the light's state (e.g., "On" or "Off").


// import React, { useState } from 'react'

// const ChatGPT = () => {

//   const [toggle,setToggle] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>{
//         toggle ? "Turn Off!" : "Turn On !"
//       }</button>
//       {
//         toggle ? "The Light is Turn On!" : "The Light is Turn Off!"
//       }
//     </div>
//   )
// }

// export default ChatGPT


//10.Dynamic Class Names:


// Question: Create a component with a button. When the button is clicked, change the background color of a div using dynamic class names.
// Hint: Use useState to toggle the class name for the div.


// with using div 

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [color,setColor] = useState("red");

//   const clickHandler = () =>{
//     setColor(color === 'red' ? "blue" : "red")
//   }
  
//   return (
//     <div>
//       <div style={{backgroundColor : color, width : "100px",height:"100px"}}></div>
//       <button onClick={clickHandler}>Change Color</button>
//     </div>
//   )
// }

// export default ChatGPT


// import React from 'react'
// import { useState } from 'react'

// const ChatGPT = () => {
//     const [bgColor,setBgColor] = useState("white");

//     const colorList = ["blue","black","orange","sky","cyan","yellow","grey","pink","purple","brown"];
//     const clickColor = () =>{
//         let newCOlor = colorList[Math.floor(Math.random()*colorList.length)];
//         setBgColor(newCOlor);
//     }

//   return (
//     <div>
//         <div style={{width:"100px",height:"100px",border:"1px solid grey",backgroundColor : bgColor}}></div>
//         <button onClick={clickColor}>Change Color</button>
//     </div>
//   )
// }

// export default ChatGPT


//11. Form Handling

// Create a form with fields for name, email, and password and confirm password
// Implement validation for each field (e.g., email format, password length).
// Display error messages and prevent form submission if validation fails.

// import React, { useState } from 'react';

// const ChatGPT = () => {
//     const [firstname,setFirstName] = useState("");
//     const [lastName,setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirm,setConfirm] = useState("")
//     const [users, setUsers] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (firstname && lastName && email && password && confirm && confirm === password) {
//             const newUser = { firstname,lastName, email, password,confirm };
//             setUsers([...users, newUser]);
//             setFirstName("");
//             setLastName("");
//             setEmail("");
//             setPassword("");
//             setConfirm("");
//         } 
//         else if(password !== confirm){
//             alert("Password & Confirm Password Not Same !!!")
//         }
//         else {
//             alert("All fields are required!");
//         }
//     };

//     const clickDelete  = (id) =>{
//         setUsers((users) => users.filter((ele,index) => index !== id));
//     }
//     const clickDeleteAll = () =>{
//         setUsers([]);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>FirstName: </label>
//                 <input
//                     value={firstname}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     type='text'
//                     required={true}
//                     placeholder='Enter your name...'
//                 /><br />
//                 <label>LastName: </label>
//                 <input
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     type='text'
//                     required={true}
//                     placeholder='Enter your name...'
//                 /><br />
//                 <label>Email: </label>
//                 <input
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     type='email'
//                     required={true}
//                     placeholder='Enter your email...'
//                 /><br />
//                 <label>Password: </label>
//                 <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     type='password'
//                     required={true}
//                     placeholder='Enter your password...'
//                 /><br />
//                 <label>Confirm Password: </label>
//                 <input
//                     value={confirm}
//                     onChange={(e) => setConfirm(e.target.value)}
//                     type='password'
//                     required={true}
//                     placeholder='Enter your password...'
//                 /><br />
//                 <button type="submit">Submit</button>
//             </form>
//             {users.map((user, index) => (
//                 <div key={index}>
//                     <h3>Id: {index + 1}</h3>
//                     <p>FirstName: {user.firstname}</p>
//                     <p>LastName: {user.lastName}</p>
//                     <p>Email: {user.email}</p>
//                     <p>Password: {user.password}</p>
//                     <p>Confirm Password : {user.confirm}</p>
//                     <button onClick={()=>clickDelete(index)}>Delete</button>
//                 </div>
//             ))}
//             {users.length > 0 ? <button onClick={clickDeleteAll}>Remove All</button> : ""}
//         </div>
//     );
// };

// export default ChatGPT;





// original code for my react interview


// {import React, { useState } from 'react';

// const ChatGPT = () => {
//   const [array, setArray] = useState([]);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     dob: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if all form fields are filled
//     if (formData.name && formData.email && formData.dob && formData.password) {
//       // Handle form submission, e.g., send data to server
//       console.log(formData);
//       setArray([...array, formData]);
//       console.log("setArray", array);
//       setFormData({ name: '', email: '', dob: '', password: '' });
//       setStep(1); // Reset to the first step
//     } 


//   };

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <label>Date of Birth:</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Multi-Step Form</h2>
//       <form onSubmit={handleSubmit}>
//         {renderStep()}
//       </form>

//       {
//         array.length > 0 && (
//           <div>
//             {array.map((item, index) => (
//               <div key={index}>
//                 <p>Name: {item.name}</p>
//                 <p>Email: {item.email}</p>
//                 <p>DOB: {item.dob}</p>
//                 <p>Password: {item.password}</p>
//               </div>
//             ))}
//           </div>
//         ) 
//       }
//     </div>
//   );
// };

// export default ChatGPT;}



// just practice original code for my react interview


// {import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [array,setArray] = useState([]);
//     const [step,setStep] = useState(1);
//     const [formData,setFormData] = useState({
//         name : '',
//         email : '',
//         dob : '',
//         password : ''
//     })

//     const formSubmit = (e) =>{
//         e.preventDefault();
//         if(formData.name && formData.email && formData.dob && formData.password){
//             setArray([...array,formData]);
//             setFormData({name :'',email : '' ,dob : '',password : ''});
//             setStep(1);
//         }
//     }

//     const handleChange = (e) =>{
//         console.log(e);
//         const {name,value} = e.target;
//         setFormData({...formData,[name] : value})
//         console.log(formData);
//     }

//     const handleStepChangePlus = (e) => {
//         e.preventDefault()
//         setStep(step + 1)
//     }

//     const handleStepChangeMinus = (e) => {
//         e.preventDefault()
//         setStep(step - 1)
//     }

//     const  renderStep = () => {
//         switch (step){
//             case 1 :
//             return(
//                 <div>
//                     <label>Name</label>
//                     <input type='text' placeholder='Enter Your Name' name='name' value={formData.name} onChange={handleChange}/>
//                     <button onClick={handleStepChangePlus}>Next</button>
//                 </div>
//             )

//             case 2 :
//             return(
//                 <div>
//                     <label>Email</label>
//                     <input type='email' placeholder='Enter Your Email' name='email' value={formData.email} onChange={handleChange}/>
//                     <button onClick={handleStepChangePlus}>Next</button>
//                     <button onClick={handleStepChangeMinus}>Back</button>
//                 </div>
//             )

//             case 3 :
//             return(
//                 <div>
//                     <label>DOB</label>
//                     <input type='date' name='dob' value={formData.dob} onChange={handleChange}/>
//                     <button onClick={handleStepChangePlus}>Next</button>
//                     <button onClick={handleStepChangeMinus}>Back</button>
//                 </div>
//             )

//             case 4 :
//                 return(
//                     <div>
//                         <label>Password</label>
//                         <input type='password' placeholder='Enter Your Password' name='password' value={formData.password} onChange={handleChange}/>
//                         <button type='submit'>Submit</button>
//                         <button onClick={handleStepChangeMinus}>Back</button>
//                     </div>
//                 )
//             default :
//             return null;
//         }
//     }
    
//   return (
//     <div>
//         <h1>Multi-form Data</h1>
//         <form onSubmit={formSubmit}>  
//             {renderStep()}
//         </form>

//         {
//             array.length > 0 && (
//                 <div>
//                     {
//                         array.map((item,index) => {
//                             return(
//                                 <div style={{marginTop:"1rem"}} key={index}>
//                                     <p>Id : {index+1}</p>
//                                     <p>Name : {item.name}</p>
//                                     <p>Email : {item.email}</p>
//                                     <p>DOB : {item.dob}</p>
//                                     <p>Password : {item.password}</p>
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             )
//         }
//     </div>
//   )
// }

// export default ChatGPT}






// cat image interview question

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [data,setData] = useState();
//     console.log(data);
//     const array = [
//         {
//             img : "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc"
//         },
//         {
//             img : "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9"
//         },
//         {
//             img : "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
//         },
//         {
//             img : "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc"
//         }
//     ];

//   return (
//     <div>
//         {
//             array.map((item,index) => {
//                 return(
//                     <div key={index} style={{display:"inline-block",marginInline:"1rem"}}>
//                         <img src={item.img} width={"140px"} height={"140px"} alt='' onClick={() => setData(item.img)} />
//                     </div>
//                 )
//             })
//         }
//         <img style={{marginTop:"2rem"}} width={"300px"}  src={data} alt='' />
//     </div>
//   )
// }

// export default ChatGPT



// fruit search by sivam bansal interview 


// import React, { useState } from 'react';

// function App() {
//   const initialFruits = [
//     "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Boysenberry", 
//     "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian", "Elderberry", 
//     "Fig", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeydew", "Jackfruit", 
//     "Kiwi", "Lemon", "Lime", "Lychee", "Mango", "Mangosteen", "Mulberry", "Nectarine", 
//     "Orange", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Pineapple", 
//     "Plum", "Pomegranate", "Pomelo", "Raspberry", "Redcurrant", "Starfruit", 
//     "Strawberry", "Tangerine", "Ugli fruit", "Watermelon", "Yellow Passion Fruit", 
//     "Zucchini (Technically a fruit)"
//   ];

//   const [fruits, setFruits] = useState(initialFruits);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedFruits, setSelectedFruits] = useState([]);

  

//   const handleFruitClick = (fruit) => {
//     if (!selectedFruits.find(selected => selected.name === fruit)) {
//       setSelectedFruits([
//         ...selectedFruits,
//         { name: fruit, lineThrough: false }
//       ]);
//     }
//     setSearchTerm("");
//   };

//   const handleCheckboxChange = (fruitName) => {
//     setSelectedFruits(
//       selectedFruits.map(fruit =>
//         fruit.name === fruitName
//           ? { ...fruit, lineThrough: !fruit.lineThrough }
//           : fruit
//       )
//     );
//   };

//   const handleDelete = (fruitName) => {
//     setSelectedFruits(selectedFruits.filter(fruit => fruit.name !== fruitName));
//   };

//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="App">
//       <h1>Fruit Search</h1>
//       <input 
//         type="text" 
//         placeholder="Search for a fruit" 
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {searchTerm && (
//         <ul>
//           {filteredFruits.map((fruit) => (
//             <li key={fruit} onClick={() => handleFruitClick(fruit)}>
//               {fruit}
//             </li>
//           ))}
//         </ul>
//       )}
//       {selectedFruits.length > 0 && (
//         <div>
//           {selectedFruits.map((fruit) => (
//             <div key={fruit.name} style={{ display: 'flex', alignItems: 'center' }}>
//               <label>
//                 <input 
//                   type="checkbox" 
//                   checked={fruit.lineThrough} 
//                   onChange={() => handleCheckboxChange(fruit.name)}
//                 />
//               </label>
//               <p style={{ textDecoration: fruit.lineThrough ? 'line-through' : 'none', margin: '0 10px' }}>
//                 {fruit.name}
//               </p>
//               <button onClick={() => handleDelete(fruit.name)}>Delete</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




//just practice on sivam bansal code


// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const data = [
//       "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Boysenberry", 
//         "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian", "Elderberry", 
//         "Fig", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeydew", "Jackfruit", 
//         "Kiwi", "Lemon", "Lime", "Lychee", "Mango", "Mangosteen", "Mulberry", "Nectarine", 
//         "Orange", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Pineapple", 
//         "Plum", "Pomegranate", "Pomelo", "Raspberry", "Redcurrant", "Starfruit", 
//         "Strawberry", "Tangerine", "Ugli fruit", "Watermelon", "Yellow Passion Fruit", 
//         "Zucchini (Technically a fruit)"
//     ]

//     const [fruits,setFruits] = useState(data);
//     const [inputValue,setInputValue] = useState('');
//     const [record,setRecord] = useState([]);

//     const handleClick = (fruit) => {
//       if(!record.find((rec) => rec.name === fruit)){
//         setRecord([...record,
//           {name : fruit, lineThrough : false}
//         ])
//       }
//       setInputValue("");
//     }

//     const handleCheckBoxChanhe = (fruit) =>{
//       setRecord(record.map((fru) => (
//         fru.name === fruit 
//         ? {...fru, lineThrough : !fru.lineThrough}
//         : fru
//       )))
//     }

//     const deleteHandler = (fruit) =>{
//       setRecord(record.filter((rec) => rec.name !== fruit))
//     }

//     const deleteAll = () =>{
//       setRecord([])
//     }

//     const fruitFilter = fruits.filter((fruit) => (
//       fruit.toLowerCase().includes(inputValue.toLowerCase())
//     ))
//     console.log(fruitFilter);
//   return (
//     <div>
//       <div>
//         <h1>My Shopping List</h1>
//         <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search Your Item...'/>

//         {
//           inputValue && 
//           (
//             fruitFilter.map((fruit) => (
//               <div style={{border:"1px solid grey"}} 
//               key={fruit} onClick={() =>handleClick(fruit)}>{fruit}</div>
//             ))
//           )
//         }
//         {
//           record.length > 0 && (
//             record.map((fruit) => (
//               <div style={{display:"flex"}}>
//                 <input type='checkbox' checked={fruit.lineThrough} onChange={() => handleCheckBoxChanhe(fruit.name)}/>
//                 <p style={{textDecoration : fruit.lineThrough ? "line-through" : "none"}}>{fruit.name}</p>
//                 <button onClick={() => deleteHandler(fruit.name)}>Delete</button>
//               </div>
//             ))
//           )
//         }
//         <button onClick={deleteAll}>All Delete</button>
//       </div>
//     </div>
//   )
// }

// export default ChatGPT




// code for Countdown Timer

//code for perplexity

// import React, { useState } from 'react';

// function Timer() {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const handleStart = () => {
//     if (hours === 0 && minutes === 0 && seconds === 0) {
//       alert('Invalid input');
//       return;
//     }

//     const id = setInterval(() => {
//       setSeconds(prevSeconds => {
//         if (prevSeconds > 0) {
//           return prevSeconds - 1;
//         } else if (prevSeconds === 0 && minutes > 0) {
//           setMinutes(prevMinutes => prevMinutes - 1);
//           return 59;
//         } else if (prevSeconds === 0 && minutes === 0 && hours > 0) {
//           setHours(prevHours => prevHours - 1);
//           setMinutes(59);
//           return 59;
//         } else {
//           clearInterval(id);
//           alert('Timer is Finished');
//           return 0;
//         }
//       });
//     }, 1000);

//     setIntervalId(id);
//   };

//   const handlePause = () => {
//     clearInterval(intervalId);
//   };

//   const handleReset = () => {
//     clearInterval(intervalId);
//     setHours(0);
//     setMinutes(0);
//     setSeconds(0);
//   };

//   const formatTime = (value) => {
//     return value.toString().padStart(2, '0');
//   };

//   return (
//     <div>
//       <input type="number" min={"0"}  value={hours} onChange={(e) =>setHours(parseInt(e.target.value))}/>

//       <input type="number" min={"0"} value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))}/>

//       <input type="number" min={"0"} value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}/>
      
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handlePause}>Pause</button>
//       <button onClick={handleReset}>Reset</button>
//       <div>
//         {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
//       </div>
//     </div>
//   );
// }

// export default Timer;



// chatgpt code


// import React, { useState, useEffect, useRef } from 'react';

// function Timer() {
//   const [hours, setHours] = useState('');
//   const [minutes, setMinutes] = useState('');
//   const [seconds, setSeconds] = useState('');
//   const [isRunning, setIsRunning] = useState(false);
//   const [totalSeconds, setTotalSeconds] = useState(0);
//   const intervalRef = useRef(null);

//   const validateInputs = (hours, minutes, seconds) => {
//     return (
//       !isNaN(hours) &&
//       !isNaN(minutes) &&
//       !isNaN(seconds) &&
//       hours >= 0 &&
//       minutes >= 0 &&
//       minutes < 60 &&
//       seconds >= 0 &&
//       seconds < 60
//     );
//   };

//   const startTimer = () => {
//     if (!validateInputs(hours, minutes, seconds)) {
//       alert('Invalid input');
//       return;
//     }
//     if (isRunning) return;

//     const total = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
//     setTotalSeconds(total);
//     setIsRunning(true);
//   };

//   const pauseTimer = () => {
//     setIsRunning(false);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }
//     setHours('');
//     setMinutes('');
//     setSeconds('');
//     setTotalSeconds(0);
//   };

//   useEffect(() => {
//     if (!isRunning) return;

//     intervalRef.current = setInterval(() => {
//       setTotalSeconds((prev) => {
//         if (prev <= 1) {
//           clearInterval(intervalRef.current);
//           setIsRunning(false);
//           alert('Timer is Finished');
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, [isRunning]);

//   useEffect(() => {
//     const hrs = Math.floor(totalSeconds / 3600);
//     const mins = Math.floor((totalSeconds % 3600) / 60);
//     const secs = totalSeconds % 60;
//     setHours(hrs);
//     setMinutes(mins);
//     setSeconds(secs);
//   }, [totalSeconds]);

//   return (
//     <div className="timer">
//       <div className="input-group">
//         <input
//           type="number"
//           value={hours}
//           onChange={(e) => setHours(e.target.value)}
//           placeholder="Hours"
//         />
//         <input
//           type="number"
//           value={minutes}
//           onChange={(e) => setMinutes(e.target.value)}
//           placeholder="Minutes"
//         />
//         <input
//           type="number"
//           value={seconds}
//           onChange={(e) => setSeconds(e.target.value)}
//           placeholder="Seconds"
//         />
//       </div>
//       <div className="buttons">
//         <button onClick={startTimer}>Start</button>
//         <button onClick={pauseTimer}>Pause</button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//       <div className="display">
//         {String(hours).padStart(2, '0')}:
//         {String(minutes).padStart(2, '0')}:
//         {String(seconds).padStart(2, '0')}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Countdown Timer</h1>
//         <Timer />
//       </header>
//     </div>
//   );
// }

// export default App;





// mini chanllenges start




// project for increment and decrement and reset  in mini project




// import React, { useState } from 'react'

// const ChatGPT = () => {

//   const [record,setRecord] = useState(0);
//   const [inputValue,setInputValue] = useState(1);

//   const handlePlus = () =>{
//     setRecord(record => {
//       return record + inputValue
//     }) 
//     console.log(inputValue);
//   }
  
//   const handleMinus = () =>{
//     setRecord(record => {
//       return record - inputValue
//     }) 
//     console.log(inputValue);
//   }

//   const handleReset = () =>{
//     setRecord(0);
//     setInputValue(1)
//   }
//   return (
//     <div>
//         {record}<br></br>
//         <div>
//           <button onClick={handleMinus}>-</button>
//           <button onClick={handlePlus}>+</button>
//         </div><br></br>
//         <h2>Increment/Decrement by : <input type='number' value={inputValue} onChange={(e) =>setInputValue(parseInt(e.target.value))}/></h2><br></br>
//         <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default ChatGPT






// project for backgroundcolor in mini project




// import React from 'react'
// import { useState } from 'react'

// const ChatGPT = () => {
//   const [bgColor,setBgColor] = useState("white");

//   const color = ["red","white","orange","blue","grey","yellow","cyan","brown","sky","black","green"]

//   const clickHandler = () => {
//     const randomColor = color[Math.floor(Math.random() * color.length)]
//     setBgColor(randomColor)
//   }

//   return (
//     <div style={{backgroundColor:bgColor,width:"100vw",height:"100vh"}}>
//       <button style={{display:"flex",justifyContent:"center",alignItems:"center",marginInline:"auto",minHeight:"50px"}} onClick={clickHandler}>CHANGE COLOR</button>
//     </div>
//   )
// }

// export default ChatGPT





// toggle theme in mini project




// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [color,setColor] = useState(false)

//   return (
//     <div>
//       <div style={{backgroundColor: color ? "black" : "white"}}>
//           <h1 style={{color: color ? "white" : "black"}}>Try to toggle the theme and see the change !!!</h1>
//           <button style={{backgroundColor: color ? "purple" : "pink",color : color ? "white" : "black"}} onClick={() => setColor(!color)}>Toggle Theme</button>
//       </div>
//     </div>
//   )
// }

// export default ChatGPT





// change color randomly




// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [color, setColor] = useState("red");
//   const [getValue, setGetValue] = useState(0);
//   const [clear,setClear] = useState("white");

//   const data = [
//     {
//       id: 1
//     },
//     {
//       id: 2
//     },
//     {
//       id: 3
//     },
//     {
//       id: 4
//     },
//     {
//       id: 5
//     },
//     {
//       id: 6
//     }
//   ];

//   const clickHandler = () => {
//     setGetValue(inputValue);
//   };

//   const clearHandler = () => {
//     setGetValue(clear)
//   };

//   return (
//     <div>
//       <input
//         type='number'
//         max={"6"}
//         min={"1"}
//         value={inputValue}
//         onChange={(e) => setInputValue(parseInt(e.target.value))}
//       />
//       <button onClick={clickHandler}>Click</button>
//       <button onClick={clearHandler}>Clear</button>
//       {
//         data.map((item, index) => (
//           <div
//             style={{
//               border: "1px solid black",
//               width: "50px",
//               height: "50px",
//               backgroundColor: item.id === getValue ? color : clear
//             }}
//             key={index}
//           >
//             {item.id}
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default ChatGPT;




// pagination  in mini challenges

// import React,{useState} from 'react'

// const ChatGPT = () => {
//     const array = [
//         {
//             id: 1,
//             food: "Pizza",
//             price: "10"
//         },
//         {
//             id: 2,
//             food: "Burger",
//             price: "20"
//         },
//         {
//             id: 3,
//             food: "Fries",
//             price: "30"
//         },
//         {
//             id: 4,
//             food: "Pasta",
//             price: "40"
//         },
//         {
//             id: 5,
//             food: "Salad",
//             price: "50"
//         },
//         {
//             id: 6,
//             food: "Tacos",
//             price: "15"
//         },
//         {
//             id: 7,
//             food: "Sushi",
//             price: "25"
//         },
//         {
//             id: 8,
//             food: "Sandwich",
//             price: "12"
//         },
//         {
//             id: 9,
//             food: "Steak",
//             price: "35"
//         },
//         {
//             id: 10,
//             food: "Chicken",
//             price: "18"
//         },
//         {
//             id: 11,
//             food: "Ice Cream",
//             price: "8"
//         },
//         {
//             id: 12,
//             food: "Cake",
//             price: "22"
//         },
//         {
//             id: 13,
//             food: "Pancakes",
//             price: "14"
//         },
//         {
//             id: 14,
//             food: "Spaghetti",
//             price: "16"
//         },
//         {
//             id: 15,
//             food: "Fried",
//             price: "13"
//         },
//         {
//             id: 16,
//             food: "Nachos",
//             price: "17"
//         },
//         {
//             id: 17,
//             food: "Hot Dog",
//             price: "11"
//         },
//         {
//             id: 18,
//             food: "Donut",
//             price: "7"
//         },
//         {
//             id: 19,
//             food: "Bagel",
//             price: "9"
//         },
//         {
//             id: 20,
//             food: "Smoothie",
//             price: "6"
//         },
//         {
//             id: 21,
//             food: "Burrito",
//             price: "19"
//         },
//         {
//             id: 22,
//             food: "Ramen",
//             price: "23"
//         },
//         {
//             id: 23,
//             food: "Quesala",
//             price: "21"
//         },
//         {
//             id: 24,
//             food: "Crepe",
//             price: "20"
//         },
//         {
//             id: 25,
//             food: "Falafel",
//             price: "15"
//         }
//     ];

//     const itemperpage = 4;
//     const[currentPage,setCurrentPage] = useState(1);

//     const lastIndex = currentPage * itemperpage;
//     const firstIndex = lastIndex - itemperpage;
//     const perpageitem = array.slice(firstIndex,lastIndex);

//     const paginate = currentPage =>setCurrentPage(currentPage);

//     const totalPages = Math.ceil(array.length / itemperpage);

//   return (
//     <div>
//         <div style={{display:"flex",justifyContent:"center",marginBlock:"0.5rem",alignItems:"center",gap:"1rem"}}>
//             <button disabled={currentPage === 1} onClick={()=>paginate(currentPage - 1)}>Prev</button>
//             Page {currentPage} of {totalPages}
//             <button disabled={currentPage === totalPages} onClick={()=>paginate(currentPage + 1)}>Next</button>
//         </div>
//         {
//             perpageitem.map((ele,index) =>{
//                 return(
//                     <div key={index} style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"0.5rem",gap:"1rem"}}>
//                         <p>{ele.id}</p>
//                         <p style={{width:"50px"}}>{ele.food}</p>
//                         <p>{ele.price}</p>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default ChatGPT





// string transformers




// import React, { useState } from 'react'

// const ChatGPT = () => {

//     const [inputValue,setInputValue] = useState("");
//     const [data,setData] = useState("");

//     const handleLower = () =>{
//         // let inputValueData = inputValue;
//         // setData(inputValueData.toLowerCase());
//         setData(inputValue.toLowerCase());
//     }

//     const handleUpper = () =>{
//         // let inputValueData = inputValue;
//         // setData(inputValueData.toUpperCase());
//         setData(inputValue.toUpperCase());
//     }
//   return (
//     <div>
//         <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
//         <button onClick={handleLower}>LowerCase</button>
//         <button onClick={handleUpper}>UpperCase</button>

//         <p>{data}</p>
//     </div>
//   )
// }

// export default ChatGPT






// expense tracker




// import React,{useState} from 'react'

// const ChatGPT = () => {
//     const[dateData,setDateData] = useState("");
//     const[inputValue,setInputValue] = useState("");
//     const[category,setCategory] = useState("");
//     const[amount,setAmount] = useState(0);

//     const [expenseData,setExpenseData] = useState([]);

//     const clickHandle = (e) =>{
//         e.preventDefault();
//         let singleData = {dateData,inputValue,category};
//         setExpenseData([...expenseData,singleData])
//         setAmount((amount) => amount + inputValue)
//         setDateData("");
//         setInputValue("");
//         setCategory("")
//     }

//     const clickDelete = (id) =>{
//         setExpenseData((expenseData) => expenseData.filter((ele,index) => ele.category !== id.category));
//         setAmount((amount) => parseInt(amount) - parseInt(id.inputValue))
//     }

// console.log(expenseData);
//     const categoryData = [
//             {
//               name : "Food"
//             },
//             {
//               name : "Transport"
//             },
//             {
//               name : "Entertainment"
//             },
//             {
//               name : "Other"
//             }
//           ]
//   return (
//     <div>
//         <div>
//             <h1>Expense Tracker</h1>
//             <div>
//                 <input type='date' value={dateData} onChange={(e)=> setDateData(e.target.value)}/><br></br>
//                 <input type='number' min={"0"} value={inputValue} onChange={(e) =>setInputValue(parseInt(e.target.value))}/><br></br>
//                 <select onChange={(e) =>setCategory(e.target.value)}>
//                     <option>Select Category</option>
//                     {
//                         categoryData.map((ele,index) =>(
//                             <option key={index} value={ele.name}>{ele.name}</option>
//                         ))
//                     }
//                 </select>
//                 <button onClick={clickHandle}>Add Expense</button>
//             </div>
//         </div>
//         <div>
//             <h2>Expenses</h2>
//             {
//                 expenseData.map((ele,index) =>{
//                     return(
//                         <div style={{display:"flex",gap:"0.5rem"}}>
//                             <p>{ele.dateData} - ${ele.inputValue} - {ele.category}</p>
//                             <button onClick={()=>clickDelete(ele)}>Delete</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>

//         <div>
//             {
//                 <h2>Total Expenses : ${amount}</h2>
//             }
//         </div>
//     </div>
//   )
// }

// export default ChatGPT




//tab for mini challenges




// import React,{useState} from 'react'

// const ChatGPT = () => {
//   const array = [
//     {
//       no :"Tab 1",
//       id : "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more."
//     },
//     {
//       no : "Tab 2",
//       id : "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML."
//     },
//     {
//       no : "Tab 3",
//       id : "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code."
//     }
//   ]
  
//   const[data,setData] = useState(array[0])

//   return (
//     <div>
//         {
//           array.map((ele,index) => (
//             <button key={index} onClick={() =>setData(ele)}>{ele.no}</button>
//           ))
//         }
//         <div>
//         <h2>Content of {data.no}:</h2>
//           <p>{data.id}</p>
//         </div>
//     </div>
//   )
// }

// export default ChatGPT


// mini challenges


// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [name,setName] = useState("John Doe");
//   const [com,setCom] = useState("TwitX");
//   const [effDate,setEffDate] = useState("");
//   const [laDate,setLaDate] = useState("");

//   return (
//     <div>
//       <div>
//           <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//           <input type='text' value={com} onChange={(e) =>setCom(e.target.value)}/>
//           <input type='date' onChange={(e) =>setEffDate(e.target.value)}/>
//           <input type='date' onChange={(e) =>setLaDate(e.target.value)}/>
//       </div>
//       <p>Hi,</p><br></br>
//       <p>Please accept this email as my formal resignation from {com}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same.</p><br></br>
//       <p>Request you to consider my letter of resignation effective from {effDate}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be {laDate}.</p><br></br>
//       <p>I would request you to consider if an early release is possible. I am grateful to {com} and looking forward to your support.</p><br></br>
//       <p>Thanks and Regards,</p><br></br>
//       {name}
//     </div>
//   )
// }

// export default ChatGPT




//edit and delete data


// import React, { useState } from 'react';

// const ChatGPT = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [array, setArray] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const clickHandle = () => {
//     if (editingIndex !== null) {
//       // Update existing item
//       const updatedArray = array.map((item, index) =>
//         index === editingIndex ? inputValue : item
//       );
//       setArray(updatedArray);
//       setEditingIndex(null); // Reset editing index
//     } else {
//       // Add new item
//       setArray([...array, inputValue]);
//     }
//     setInputValue("");
//   };

//   const clickEdit = (index) => {
//     console.log(index);
//     setInputValue(array[index]);
//     console.log(array[index]);
//     setEditingIndex(index);
//   };

//     const clickDelete = (id) => {
//     setArray((array) => array.filter((ele, index) => index !== id));
//   };
//     const handleRemoveAll = () =>{
//       setArray([]);
//     }
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={clickHandle}>
//           {editingIndex === null ? 'Submit' : 'Update'}
//         </button>
//         <button onClick={handleRemoveAll}>Remove All</button>
//       </div>
//       {array.map((ele, index) => (
//         <div key={index} style={{ display: 'flex' }}>
//           <p style={{ width: '100px' }}>{ele}</p>
//           <button onClick={() => clickEdit(index)}>Edit</button>
//           <button onClick={() => clickDelete(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ChatGPT;

// JUST PRACTICE ON edit and delete data

// import React,{useState} from 'react'

// const ChatGPT = () => {
//     const[inputValue,setInputValue] = useState("");
//     const[arr,setArray] = useState([]);
//     const[editingIndex,setEditingIndex] = useState(null);

//     const clickHandle = () =>{
//         if(editingIndex !== null){
//             let updatedArray = arr.map((ele,index) =>(
//                 index === editingIndex ? inputValue : ele
//             ))
//             setArray(updatedArray)
//             setEditingIndex(null);
//         }
//         else{
//             setArray([...arr,inputValue]);
//         }
//         setInputValue("");
//     }

//     const clickEdit = (index) =>{
//         console.log(index);
//         setInputValue(arr[index]);
//         setEditingIndex(index)
//     }

//     const clickDelete = (id) =>{
//         setArray((arr) => arr.filter((ele,index) => index !== id));
//     }

//     const clickRemoveAll = () =>{
//         setArray([]);
//     }

//   return (
//     <div>   
//         <div>
//             <input type='text' value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
//             <button onClick={clickHandle}>
//                 {editingIndex === null ? "Submit" : "Update"}
//             </button>
//             <button onClick={clickRemoveAll}>Remove All</button>
//         </div>
//         {arr.length > 0 && <h2>All Data</h2>}
//         {
//             arr.map((ele,index) =>{
//                 return(
//                     <div key={index} style={{display:"flex",gap:"1rem",margin:"1rem"}}>
//                         <p>{index+1}</p>
//                         <p>{ele}</p>
//                         <button onClick={()=>clickEdit(index)}>Edit</button>
//                         <button onClick={()=>clickDelete(index)}>Delete</button>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default ChatGPT




//chips input

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const[array,setArray] = useState([]);
//   const[inputValue,setInputValue] = useState("");

//   const handleEnterPress = (e) =>{
//     console.log(e);
//     if (e.key === 'Enter') {
//       setArray([...array, inputValue]);
//       setInputValue("");
//     }
//   }

//   const handleDelete = (id) =>{
//     setArray((array) =>array.filter((ele,index) => index !== id));
//   }
//   return (
//     <div>
//       <input type='text' value={inputValue} onKeyPress={handleEnterPress} onChange={(e) => setInputValue(e.target.value)} placeholder='Type & hit Enter'/>
//       {
//         array.map((ele,index) => {
//           return(
//             <div style={{display:"flex",gap:"1rem"}} key={index}>
//               <p>{ele}</p>
//               <button onClick={() =>handleDelete(index)}>❌</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ChatGPT



// image carousel mini challenges

// import React, { useState } from 'react';

// const ImageCarousel = () => {
//     const images = [
//         "https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/1-OkPi44L4.jpg",
//         "https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/2-LbNREVae.jpg",
//         "https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/3-SrIwCN-U.jpg",
//         "https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/4-IwShTW20.jpg",
//         "https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/5-XTj0vlQy.jpg"
//       ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((currentIndex) => currentIndex - 1);
//   };

//   const handleNext = () => {
//     setCurrentIndex((currentIndex) => currentIndex + 1);
//   };

//   return (
//     <div>
//       <div>
//         <button disabled={currentIndex === 0} onClick={handlePrev}>Prev</button>
//         <img src={images[currentIndex]} width={"200"} height={"200"} alt=''/>
//         <button disabled={currentIndex === 4} onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;


//random password data

// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const [ischeck,setIsCheck] = useState(false);
//     const [inputValue,setInputValue] = useState("");
//   return (
//     <div>
//         <input type='password' value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
//         <button onClick={()=>setIsCheck(!ischeck)}>{ischeck ? "Hide" : "Show"}</button><br></br>
//         {
//             ischeck ? inputValue : ""
//         }
//         {/* {setInputValue(inputValue)} */}
//     </div>
//   )
// }

// export default ChatGPT



// FAQ Component - React JS Interview Challenge - By Imran Shaikh(YOUTUBER) 



// import React from 'react'
// import FAQ from './FAQ'

// const ChatGPT = () => {
//   const faqs = [
//     {
//         question: "How many bones does a cat have?",
//         answer: "A cat has 230 bones - 6 more than a human",
//     },
//     {
//         question: "How much do cats sleep?",
//         answer: "The average cat sleeps 12-16 hours per day",
//     },
//     {
//         question: "How long do cats live",
//         answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
//     },
// ]
//   return (
//     <div> 
//       <h2>Frequently Asked Question</h2>
//         {
//           faqs.map((faq,index) =>{
//             return(
//               <FAQ key={index} index={index} faq={faq}/>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default ChatGPT




// Custom Modal Overlay-React JS Interview Challenge - By Imran Shaikh(YOUTUBER) 



// import React, { useState } from 'react'
// import FAQ from './FAQ';

// const ChatGPT = () => {

//   const[showOffer,setShowOffer] = useState(false);
//   const[acceptOff,setAcceptOff] = useState(false);

//   const clickOffer = () =>{
//     setShowOffer(!showOffer)
//   }

//   const clickCross = () =>{
//     setShowOffer(!showOffer)
//   }

//   const acceptOffer = () =>{
//     setAcceptOff(!acceptOff)
//     setShowOffer(!showOffer)
//   }

//   return (
//     <div>
//         <div style={{backgroundColor : showOffer ? "grey" : ""}}>

//           <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",position:"absolute"}}>
//             {!acceptOff ? <button style={{backgroundColor:"purple",color:"white",marginLeft:"15rem",marginTop:"15rem"}} onClick={clickOffer}>Show Offer</button> : <h2 style={{marginLeft:"15rem",marginTop:"15rem"}}>Offer Accepted</h2>}
//           </div>

//           {
//             showOffer && <FAQ clickCross={clickCross} acceptOffer={acceptOffer}/>
//           }
//         </div>
//     </div>
//   )
// }

// export default ChatGPT





// Image Carousel React JS Interview Challenge - By Imran Shaikh(YOUTUBER) 

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const ChatGPT = () => {

//     const [index,setIndex] = useState(0);
//     const [images,setImages] = useState([]);

//     useEffect(() =>{
//         const fetchApi = async() =>{
//             const url = "https://www.reddit.com/r/aww/top/.json?t=all";
//             const fecthData = await fetch(url);
//             const result = await fecthData.json();
//             const data = result.data.children;
//             const list = data.filter((item) => item.data.url_overridden_by_dest.includes('.jpg'))
//             .map((item) => item.data.url_overridden_by_dest);
//             console.log(list);            
//             setImages(list)
//         }
//         fetchApi();
//     },[]);

//     useEffect(() => {
//         const time = setInterval(() => {
//             clickHandle('right');
//         },1000)

//         return () =>{
//             clearInterval(time);
//         }
//     },[index])


//     const clickHandle = (dir) =>{
//         let lastIndex = images.length - 1;
//         console.log('current index' , index);

//         if(dir === 'left'){
//             if(index === 0){
//                 setIndex(lastIndex)
//             }
//             else{
//                 setIndex((idx) => idx - 1);
//             }
//         }
//         else if(dir === 'right'){
//             if(index === lastIndex){
//                 setIndex(0)
//             }
//             else{
//                 setIndex((idx) => idx + 1);
//             }
//         }
//     }
//   return (
//     <div>
//         <div style={{display:"flex",alignItems:"center"}}>
//             <button onClick={() => clickHandle("left")} style={{position:"absolute",padding:"0.5rem",cursor:"pointer"}}>{"<"}</button>
//             <img style={{width:"100vw",height:"100vh"}} src={images[index]} alt=''/>
//             <button onClick={() => clickHandle("right")} style={{position:"absolute",right:"0",padding:"0.5rem",cursor:"pointer"}}>{">"}</button>
//         </div>
//     </div>
//   )
// }

// export default ChatGPT



// star rating in react JS by chatGPT



// import React, { useState } from 'react';
// import './StarRating.css';

// const StarRating = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <>
//         <h1>Star Rating</h1>
//         <div className="star-rating">
//         {[...Array(5)].map((star, index) => {
//             index += 1;
//             return (
//             <button
//                 type="button"
//                 key={index}
//                 className="star-button"
//                 onClick={() => setRating(index)}
//                 onMouseEnter={() => setHover(index)}
//                 onMouseLeave={() => setHover(rating)}
//             >
//                 <span className={index <= (hover || rating) ? 'star black' : 'star gray'}>
//                 &#9733;
//                 </span>
//             </button>
//             );
//         })}
//         </div>
//     </>
//   );
// };

// export default StarRating;







// star rating in react JS Interview Challenge - By Imran Shaikh(YOUTUBER) 



// import React, { useState } from 'react';
// import './StarRating.css';

// const StarRating = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   return (
//     <div>
//         <h1>Star Rating</h1>
//       {
//         [1,2,3,4,5].map((num) => (
//             <button
//             key={num}
//             onClick={() =>setRating(num)}
//             onMouseOver={() =>setHover(num)}
//             onMouseLeave={()=>setHover(rating)}
//             >
//                 <span
//                 className={`star ${num <= (hover || rating)
//                     ? 'on' : 'off'}`
//                 }
//                 >&#9733;</span>
//             </button>
//         ))
//       }
//     </div>
//   );
// };

// export default StarRating;





// infinite scroll in react




// import React, { useState, useEffect } from 'react';

// const InfiniteScrollComponent = () => {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);

//   // Function to fetch data
//   const fetchData = async () => {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
//       const data = await response.json();
//       console.log(data);
//       setItems((prevItems) => [...prevItems, ...data]);
//       setPage((prevPage) => prevPage + 1);
//     } 
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Function to handle scroll event
//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
//       fetchData();
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Initial data fetch
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div>
//       <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>Infinite Scroll</h1>
//       <ul>
//         {items.map((item,index) => (
//           <div style={{gap:"1rem",padding:"2rem",display:"flex",border:"1px solid black",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
//             <h2>{index + 1}.</h2>
//             <h2 key={item.id}>{item.title}</h2>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InfiniteScrollComponent;







// Product Filter App-React Interview Challenge - By Imran Shaikh(YOUTUBER) 




// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';

// const ChatGPT = () => {
//      const items = [
//         {
//             name: 'Prada',
//             category: 'Bags',
//         },
//         {
//             name: 'Gucci',
//             category: 'Bags',
//         },
//         {
//             name: 'Guess',
//             category: 'Bags',
//         },
//         {
//             name: 'Rolex',
//             category: 'Watches',
//         },
//         {
//             name: 'Timex',
//             category: 'Watches',
//         },
//         {
//             name: 'Nike',
//             category: 'Sports',
//         },
//         {
//             name: 'Adidas',
//             category: 'Sports',
//         },
//         {
//             name: 'Fila',
//             category: 'Sports',
//         },
//         {
//             name: 'Ray Ban',
//             category: 'Sunglasses',
//         },
//         {
//             name: 'Aldo',
//             category: 'Sunglasses',
//         },
//         {
//             name: 'Polaroid',
//             category: 'Sunglasses',
//         },
//     ];

//     const butt = [
//         {
//             id : "Bags"
//         },
//         {
//             id : "Watches"
//         },
//         {
//             id : "Sports"
//         },
//         {
//             id : "Sunglasses"
//         }
//     ]
//     const [timer,setTimer] = useState(false);
//     const[record,setRecord] = useState([]);

//     const clickHandle = (data) =>{
//        let newRecord = items.filter((single) => single.category === data)
       
//        if(record.find((rec) => rec.category === data)){
//             setRecord((prev) => prev.filter((rec) => rec.category !== data));
//             setTimer(true)
//        }
//        else{
//         setRecord((record) => [...record,...newRecord]);
//         setTimer(false)
//        }
//     }

//     useEffect(()=>{
//         setTimer(true)
//     },[])
//   return (
//     <div>
//         <div style={{display:"flex",gap:"1rem",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
//             {
//                 butt.map((item,index) => (
//                     <div key={index}>
//                         <button style={{cursor:"pointer"}}  onClick={()=>clickHandle(item.id)}>{item.id}</button>
//                     </div>
//                 ))
//             }
//         </div>
//         {
//                 !timer
//             ?
//                 record.map((rec,index) => (
//                     <div style={{display:"inline-block",border:"1px solid black",padding:"0.5rem",marginInline:"1rem",marginTop:"1rem"}} key={index}>
//                         <h2>{rec.name}</h2>
//                         <p>({rec.category})</p>
//                     </div>
//                 ))
//             :
//                 items.map((rec,index) => (
//                     <div style={{display:"inline-block",border:"1px solid black",padding:"0.5rem",marginInline:"1rem",marginTop:"1rem"}} key={index}>
//                         <h2>{rec.name}</h2>
//                         <p>({rec.category})</p>
//                     </div>
//                 ))
//         }
//     </div>
//   )
// }

// export default ChatGPT









//  Custom Tabs - React Interview Challenge - By Imran Shaikh(YOUTUBER) 




// import React, { useState } from 'react'

// const ChatGPT = () => {
//     const record = [
//         {
//             id : "Home"
//         },
//         {
//             id : "About"
//         },
//         {
//             id : "Contact"
//         }
//     ]
//     const [data,setData] = useState("Home");

//   return (
//     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"200px"}}>
//         <h1>Custom Tabs</h1>
//         <div style={{display:"flex",gap:"1rem"}}>
//             {
//                 record.map((item,index) => (
//                     <button style={{padding:"0.3rem",cursor:"pointer",backgroundColor : item.id === data ? "black" : "white",color : item.id === data ? "white" : "black"}} key={index} onClick={() =>setData(item.id)}>{item.id}</button>
//                 ))
//             }
//         </div>
//         <h2>Tab content for {data}</h2>
//     </div>
//   )
// }

// export default ChatGPT

