import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import CartList from './CartList'


function Cart() {

    const {cartList} = useContext(CartContext)

    return (
        <>
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3><strong>No hay productos en tu carrito</strong></h3>
                        <Link to="/">Ir a comprar</Link>
                    </div>
                </div>
            :
            <>
                <CartList />
            </>
            }
        </>
    )
}
export default Cart