import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext/CartContext';
import {toast, ToastContainer} from 'react-toastify';



export default function ItemDetail({ detalles }) {

  const [irCarrito, setIrCarrito] = useState(false)

  const {agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidad) => {
        toast.success('Agregaste ' + cantidad + ' producto/s al carrito!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          });
        setIrCarrito(true)
        agregarAlCarrito({...detalles, cantidad: cantidad})
    }

  return (
    <>
    <div key={detalles.id} className="container mt-5">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 pb-5 align-self-center">  
                  <img src={detalles.url} alt="" className='img-detail rounded mt-5'/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="fw-bold">{detalles.title}</h3>
                    <h4>${detalles.precio}</h4>
                    <p>{detalles.description}</p>
                    <h5>Stock: {detalles.stock}</h5>

                    {!irCarrito ?
                      <>
                      <ItemCount stock={detalles.stock} valorInicial={1} onAdd={onAdd} /> 
                      </>
                    : 
                        <div className="d-flex justify-content-center">
                            <Link to={`/cart`}> 
                                <button className="btn btn-primary bg-gradient me-3 mt-3">Ir al carrito</button>
                            </Link>
                            <Link to={`/`}> 
                                <button className="btn btn-primary bg-gradient ms-3 mt-3">Seguir comprando</button>
                            </Link>
                            
                        </div>
                    }
                </div>
            </div>
        </div>
        <ToastContainer/>
     </>
  );
}