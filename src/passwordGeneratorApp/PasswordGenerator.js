import React from "react";
import { useState } from "react";

const PasswordGenerator = () => {

    const [uppercase,setUppercase] = useState(true);
    const [lowercase,setLowercase] = useState(true);
    const [number,setNumber] = useState(true);
    const [symbols,setSymbols] = useState(true);
    const [inputValue,setInputValue] = useState(8);
    const [copyPassword,setCopyPassword] = useState("");

    const btnHandler = () =>{
        let set = "";

        if(uppercase){
            set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if(lowercase){
            set += "abcdefghijklmnopqrstuvwxyz"
        }
        if(number){
            set += "0123456789"
        }
        if(symbols){
            set += "!@#$%^&*()-_+="
        }
        
        if(inputValue >= 8 && inputValue <= 50){
            let newInputValue = "";
            for(let i=1;i<=inputValue;i++){
                let calculate = Math.floor(Math.random() * set.length);
                newInputValue += set[calculate];
            }
            setCopyPassword(newInputValue);
        }
        else{
            alert("Select Number Will Be Greater Than 8 and under 50");
        }
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(copyPassword);
        alert("Copy Password Successfull !!!")
    }

    return(
        <div>
            <div style={{display : "flex"}}>
                <input value={copyPassword} type="text" />
                <button onClick={copyHandler}>Copy Here</button>
            </div>

            <div style={{display : "flex"}}>
                <p>Select Password Length(**8-50 charracters**)</p>
                <input value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} type="number" min={"8"} max={"50"} />
            </div>

            <div>
                <lable>UpperCase</lable>
                <input type="checkbox" checked={uppercase} onChange={() =>setUppercase(!uppercase)}/><br></br>
                <lable>LowerCase</lable>
                <input type="checkbox" checked={lowercase} onChange={() =>setLowercase(!lowercase)}/><br></br>
                <lable>Numbers</lable>
                <input type="checkbox" checked={number} onChange={() =>setNumber(!number)}/><br></br>
                <lable>Symbols</lable>
                <input type="checkbox" checked={symbols} onChange={() =>setSymbols(!symbols)}/><br></br>
                <button onClick={btnHandler}>Generate Password</button>
            </div>
        </div>
    )
}
export default PasswordGenerator;



























// import React, { useState } from "react";

// const PasswordGenerator = () => {

//     const [uppercase,setUppercase] = useState(true);
//     const [lowercase,setLowercase] = useState(true);
//     const [numbers,setNumbers] = useState(true);
//     const [symbols,setSymbols] = useState(true);
//     const [inputValue,setInputValue] = useState(8);
//     const [copyPassword,setCopyPassword] = useState("");

//     const btnHandler = () => {
//         let set = "";
//         if(uppercase){
//             set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//         }
//         if(lowercase){
//             set += "abcdefghijklmnopqrstuvwxyz"
//         }
//         if(numbers){
//             set += "0123456789"
//         }
//         if(symbols){
//             set += "!@#$%^&*()-_+=";
//         }

//         if(inputValue >= 8){
//             let newInputValue = "";

//             for(let i=1;i<=inputValue;i++){
//                 let calculate = Math.floor(Math.random() * set.length);
//                 newInputValue += set[calculate];
//             }
//             setCopyPassword(newInputValue);
//         }
//         else{
//             alert("Password Length Must Be Greater Than 8")
//         }
//     }

//     const copyText = () => {
//         navigator.clipboard.writeText(copyPassword);
//     }

//     return(
//         <div>
//             <h1>Password Generator</h1>
//             <div>
//                 <input type="text" value={copyPassword}/>
//                 <button onClick={copyText}>Copy Text</button>
//             </div>

//             <div style={{display:"flex"}}>
//                 <p>Select Password Length (8 to 50)</p>&nbsp;&nbsp;
//                 <input type="number" value={inputValue} min={"8"} max={"50"}
//                 onChange={(e) => {setInputValue(parseInt(e.target.value))}}
//                 />
//             </div>
            
//             <br></br>

//             <div>
//                 <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)}/>&nbsp;&nbsp;
//                 <label>Include UpperCase</label><br></br><br></br>
//                 <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)}/>&nbsp;&nbsp;
//                 <label>Include LowerCase</label><br></br><br></br>
//                 <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)}/>&nbsp;&nbsp;
//                 <label>Include Numbers</label><br></br><br></br>
//                 <input type="checkbox" checked={symbols} onChange={() => setSymbols(!symbols)}/>&nbsp;&nbsp;
//                 <label>Include Symbols</label><br></br><br></br>
//                 <button onClick={btnHandler}>Generate Password</button>
//             </div>
//         </div>
//     )
// }

// export default PasswordGenerator;