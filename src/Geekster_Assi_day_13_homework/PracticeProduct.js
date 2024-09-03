import React,{useState} from 'react'

const PracticeProduct = () => {

  const [product, setProduct] = useState([
    {
        id: 1,
        name: "Product-1",
        price: 100,
        quantity: 0
    },
    {
        id: 2,
        name: "Product-2",
        price: 200,
        quantity: 0
    },
    {
        id: 3,
        name: "Product-3",
        price: 300,
        quantity: 0
    }
]);

  const [carts,setCarts] = useState([]);
  const [total,setTotal] = useState(0);
  const [hide,setHide] = useState(false)

  const plusHandler = (pro) => {
      const dataIndex = carts.findIndex((item) => item.id === pro.id);
      // console.log("dataIndex :", dataIndex);
      if(dataIndex !== -1){
        pro.quantity++;
        const data = [...carts];
        data[dataIndex].quantity++;
        setCarts(data)
      }
      else{
        setCarts([...carts, {...pro,quantity : 1}])
        pro.quantity++;
        setHide(!hide)
      }
  }
  const minusHandler = (pro) => {
    const dataIndex = carts.findIndex((item) => item.id === pro.id);
      if(dataIndex !== -1 && pro.quantity >= 1){
        pro.quantity--;
        const data = [...carts];
        data[dataIndex].quantity--;
        setCarts(data)
      }
      else{
        if(pro.quantity >= 1){
          setCarts([...carts, {...pro,quantity : 1}])
          pro.quantity--;
        }
      }
  }

  const calculateOverallTotal = () => {
    let total = 0;
    carts.forEach((cart) => {
        total +=  cart.price * cart.quantity;
    });
    return total;
};

const removeAllDelete = () =>{
  setCarts([])
  setTotal(0)
  setHide(!hide)
}
  return (
    <>
          <h1 style={{fontFamily : "monospace" ,fontSize : "40px",textAlign : "center"}}>Product Cart Page</h1>
          <div className='main' style={{display:"flex",gap:"5rem"}}>
              <div className='product'>
                  <h1>Products</h1>
                  <ol>
                      {product.map((pro) => (
                          <li style={{display:"flex",gap:"1rem"}} className='pro_li' key={pro.id}>
                              {pro.name}&nbsp;&nbsp; {pro.price}
                              <div className='btn' style={{gap:"1rem"}}>
                                  <button style={{padding:"0.3rem"}} onClick={() => minusHandler(pro)}>-</button>
                                  <button style={{padding:"0.3rem"}}>{pro.quantity}</button>
                                  <button style={{padding:"0.3rem"}} onClick={() => plusHandler(pro)}>+</button>
                              </div>
                          </li>
                      ))}
                  </ol>
              </div>

              <div className='cart'>
                  <h1>Cart</h1>
                  <ol style={{ listStyleType: "none" }}>
                      {carts.map((cart) => (
                          <li className='cart_li' key={cart.id}>
                              {cart.name}&nbsp;&nbsp;&nbsp;&nbsp;{cart.quantity}×{cart.price}&nbsp; = &nbsp;{cart.quantity * cart.price}
                          </li>
                      ))}
                      <div style={{display:"flex"}}>
                        <h2 style={{marginTop : "1rem"}}>Total: {calculateOverallTotal()}</h2>
                       {
                        hide && <button onClick={removeAllDelete}>Remove All</button> 
                       }
                      </div>
                  </ol>
              </div>
          </div>
      </>
  )
}

export default PracticeProduct