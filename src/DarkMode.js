import React, { useState } from 'react'

const DarkMode = () => {
    const [dark,setDark] = useState(false);
    
  return (
    <div style={{backgroundColor : dark ? "black" : "white",width:"100vw",height:"30vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{color : dark ? "yellow" : "black"}}>hello</h1>
        <button style={{color : dark ? "black" : "black"}} onClick={() => setDark(!dark)}>Change</button>
    </div>
  )
}

export default DarkMode