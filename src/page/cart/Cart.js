
import "./cart.css"
import React from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import CartItem from "../../component/CartItem"
import { useSelector } from "react-redux"
import { cartSelector } from "../../reducer/cartReducer"

function Cart() {
  // console.log("At the main fun top")
              //  const [products, setProducts] = useState([]) 
    // const [error, setError] = useState() 
              // const [count, setCount] = useState()
    // const [click, setClick] = useState(0)
    // const [click1, setClick1] = useState(0)
              // useEffect(
              //   () => {
              //     let  item =  localStorage.getItem("cartItem")
              //     if(item){

              //         setProducts(JSON.parse(item))
              //     }
              //   }, []    )

    // function notifyHome (childData, counts){

    //   // console.log("Home Is notify")
    //   // console.log(childData)
    //   setCount(counts)
    // }
    
    const products = useSelector(cartSelector)
    console.log(products)
    return (
      <>
       <Header />
    <div className="container mt-3">
      {
        products.length === 0 &&
        <h2 className="mt-3">No Product to show</h2>
      }
     
      {/* {click} &nbsp; &nbsp; &nbsp; 
      <button onClick={()=> setClick(click + 1)}>Click</button>
      &nbsp; &nbsp; &nbsp; {click1} &nbsp; &nbsp; &nbsp;
      <button onClick={()=> setClick1(click1)}>Click1</button>
      <br></br> */}
      {/* { products.length>0 && products[0].title} */}

      <div className="row">
          {products.map((pro, i) => 
          <div  key={i}>
            <CartItem item={pro}/>
          </div>
           )}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Cart
