import React, {useContext} from 'react'
import { CartContext } from '../CartContext/CartContext'


function Cart() {

    const {cartList, vaciarCarrito} = useContext(CartContext)

    return (
        <div>
            <div className="container">
                <div className="card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded">
                    {cartList.map(productos => 
                    <div className="row" key={productos.id}>
                        <div>
                            <img src={productos.url} alt="" style={{width:150}}></img>
                        </div>
                        <div>
                            <h5>{productos.title}</h5>
                        </div>
                        <div>
                            <h5>${productos.precio * productos.cantidad}</h5>
                        </div>
                        <div>
                            <h5>Unidades: {productos.cantidad}</h5>
                        </div>
                    </div>
                    )}
                    <div>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )}
export default Cart