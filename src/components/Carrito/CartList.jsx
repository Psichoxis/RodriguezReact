import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const CartList = () => {

    const { cartList, totalCompra, eliminarItem, vaciarCarrito } = useContext(CartContext)

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center text-center">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-3">
                        <h5>Nombre:</h5>
                    </div>
                    <div className="col-2">
                        <h5>Precio:</h5>
                    </div>
                    <div className="col-1">
                        <h5>Cantidad:</h5>
                    </div>
                    <div className="col-2">
                        <h5>Total:</h5>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {cartList.map(prod => 
                <div className="row align-items-center" key={prod.id}>
                    <div className="col-3">
                        <img src={prod.url} alt="" style={{width:150}}></img>
                    </div>
                    <div className="col-3">
                        <h5>{prod.title}</h5>
                    </div>
                    <div className="col-2">
                        <h5>${prod.precio}</h5>
                    </div>
                    <div className="col-1">
                        <h5>{prod.cantidad}</h5>
                    </div>
                    <div className="col-2">
                        <h5>${prod.cantidad * prod.precio}</h5>
                    </div>
                    <div className="col-1">
                        <button onClick={() => eliminarItem(prod.id)}>Eliminar</button>
                    </div>
                    <hr></hr>
                </div>
                )}
                <h3><b>Precio Total:</b></h3>
                <h4><b>${totalCompra()}</b></h4>
                <div>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/checkout"><button>Procesar Compra</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CartList