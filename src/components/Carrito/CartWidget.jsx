import React from 'react'
import {Link} from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to={`/cart`}> <i className="fa fa-shopping-cart"></i> </Link>
    
  )
}

export default CartWidget