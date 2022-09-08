import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import {toast, ToastContainer} from 'react-toastify';

const CartList = () => {

    const { cartList, totalCompra, eliminarItem, vaciarCarrito } = useContext(CartContext)

    const notify = () => {
        toast.success('Producto eliminado correctamente!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            });
    }

    return (
        <>
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
                        <h5>Subtotal:</h5>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {cartList.map(prod => 
                <div className="row align-items-center mb-3" key={prod.id}>
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
                        <button className="btn btn-primary bg-gradient me-3 mt-3" onClick={() => {
                            eliminarItem(prod.id)
                            notify()
                        }}>Eliminar</button>
                    </div>
                    <hr></hr>
                </div>
                )}
                <h3><b>Precio Total:</b></h3>
                <h4><b>${totalCompra()}</b></h4>
                <div>
                    <button className="btn btn-primary bg-gradient me-3 mt-3" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <Link to="/checkout"><button className="btn btn-primary bg-gradient me-3 mt-3">Procesar Compra</button></Link>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default CartList