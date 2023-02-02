
import "./Home.css"
import React, { useEffect, useState } from 'react'
import Header from "../../component/Header"
import Footer from "../../component/Footer"
import ProductCard from "../../component/ProductCard"

function Home() {
  // console.log("At the main fun top")
    const [products, setProducts] = useState([]) 
    const [error, setError] = useState() 
    // const [count, setCount] = useState()
    // const [click, setClick] = useState(0)
    // const [click1, setClick1] = useState(0)
    useEffect(
      () => {
        fetch ("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
        // console.log("Insode the fetch fun")
        setProducts(res)
        setError()
    })
    .catch(error => {
      // console.log(error)
      setError(error)
    })
      }, []    )

    // function notifyHome (childData, counts){

    //   // console.log("Home Is notify")
    //   // console.log(childData)
    //   setCount(counts)
    // }
    

    return (
      <>
       <Header />
    <div className="container mt-3">
      {
        error &&
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
          <div className="col-md-3 mb-4" key={i}>
            <ProductCard item={pro} />
          </div>
           )}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
