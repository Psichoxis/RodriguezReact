import React from 'react'
import {Link} from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'
import {useContext} from 'react';

const CartWidget = () => {
  const {cartList} = useContext(CartContext)
  return (
    <Link to={`/cart`}> <i className="fa fa-shopping-cart fs-4 colour">{cartList.length}</i> </Link>
  )
}

export default CartWidget