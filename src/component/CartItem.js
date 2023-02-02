import React from 'react'
import "./cartItem.css"

function CartItem(props) {
    let cartProduct = props.item
  return (
    <div className='cart-item-div'>
      <img src={cartProduct.image} alt={"#"}></img>
      <p>{cartProduct.title}</p>
      <h3>{cartProduct.price}</h3>
      {/* <p>{cartProduct.description}</p> */}
    </div>
  )
}

export default CartItem
