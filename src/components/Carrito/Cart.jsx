import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'


function Cart() {

    const {cartList, vaciarCarrito, eliminarItem, totalCompra} = useContext(CartContext)

    return (
        <>
        {cartList.length === 0 
        ? 
        <div className="container">
            <div className="card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded">
                <div>
                    <h4>Tu carrito esta vacío.</h4>
                </div>
                <div>
                    <button><Link to="/">Ir a comprar</Link></button>
                </div>
            </div>
        </div>
        :
            <div className="container">
                <div className="card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded">
                    {cartList.map(productos => 
                    <div className="row" key={productos.id}>
                        <div>
                            <img src={productos.url} alt="" style={{width:150}}></img>
                        </div>
                        <div>
                            <h5><i>{productos.title}</i></h5>
                        </div>
                        <div>
                            <h5>${productos.precio}</h5>
                        </div>
                        <div>
                            <h5>Unidades: {productos.cantidad}</h5>
                        </div>
                        <div>
                            <h5>Subtotal: ${productos.precio * productos.cantidad}</h5>
                        </div>
                        <div>
                            <button onClick={() => eliminarItem(productos.id)}>Eliminar</button>
                        </div>
                    </div>
                    )}
                    </div>
                    <div className="card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded">
                        <div>
                            <h4><b>Precio Total: ${totalCompra()}</b></h4>
                        </div>
                        <div>
                            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        </div>
                    </div>
            </div>
        }
        </>
    )}
export default Cart