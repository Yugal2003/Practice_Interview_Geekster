import React, { useState } from "react";

const Paragraph = () => {
    const para = [
        {
           id : 1,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
        },
        {
            id : 2,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
        },
        {
            id : 3,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         },
         {
             id : 4,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         },
         {
            id : 5,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         },
         {
             id : 6,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         },
         {
            id : 7,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         },
         {
             id : 8,
             parag:  "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies."
         }
    ]
    const [inputValue,setInputValue] = useState(0);
    const [data,setData] = useState([]);

    const clickHanlder = () =>{
        const numberOfInput = parseInt(inputValue);
        if(numberOfInput > para.length){
            alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
            setData(para);
        }
        else if(numberOfInput >= 0 && numberOfInput <= 8){
            setData(para.slice(0,numberOfInput)) // splice also used hear ok...
        }
        else{
            alert("Positive Number Accept Only !!!")
            setData([]);
        }
    }

    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems : "center",marginTop:"2rem"}}> 
            <h1>TIRED OF BORING LOREM IPSUM?</h1>
            <div style={{display:"flex",marginTop:"1rem",gap:"0.5rem"}}>
                <h2>Paragraphs :</h2>
                <input value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} style={{width:"4rem",textAlign:"center"}} type="number" />
                <button onClick={clickHanlder}>GENERATE</button>
            </div>

            {
                data.map((item,index) =>{
                    return(
                        <div style={{width:"50%",marginInline : "1rem",marginTop:"5rem"}} key={index}>
                            <p>{item.id} : {item.parag}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Paragraph