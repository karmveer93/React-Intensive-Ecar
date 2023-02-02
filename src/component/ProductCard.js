import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../reducer/cartReducer'
import './Productcards.css'

function ProductCard(props) {
  let product = props.item
  const dispatch = useDispatch()

  function handelAddToCartEvent (){
    // old way totransfer data 
    // // console.log("Add To Cart")
    // // first check privius any data avaliable or not 
    // let cartItem = localStorage.getItem("cartItem")
    // if(!cartItem){
    //   cartItem = []
    // }else{
    //   cartItem=JSON.parse(cartItem)// it coivert string to json formate 
    // }
    // cartItem.push(product)
    // // send data to local sytorage 
    // localStorage.setItem("cartItem", JSON.stringify(cartItem))
    // props.inputForHome(product, cartItem.length)


    // now we use the redux 
    // using dispatch to send add actions and payload(data)
   
    dispatch(add(product))
    
  }
  return (
    <div>
      <div className="card card-main" >
    <h5 className="card-title">{product.title}</h5>
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>{product.price}</h3>
    <p className="card-text">{product.description}</p>
    <button type="button" onClick={handelAddToCartEvent} className="btn btn-primary">Add To Cart</button>
  </div>
</div>
    </div>
  )
}

export default ProductCard
