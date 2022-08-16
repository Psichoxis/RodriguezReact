import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../CartContext/CartContext';



export default function ItemDetail({ detalles }) {

  const [irCarrito, setIrCarrito] = useState(false)

  const {cartList, agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log("Agregaste " + cantidad + " al carrito!")
        setIrCarrito(true)
        agregarAlCarrito({...detalles, cantidad: cantidad})
        console.log(cartList)
    }

  return (
    <>
    <div key={detalles.id} className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={detalles.url} alt="" className='img-detail rounded'/></div>
        <div><b>{detalles.title}</b></div>
        <div><b>Stock: {detalles.stock}</b></div>
        <div><b><i>{detalles.description}</i></b></div>
        <div><b>Precio: ${detalles.precio}</b></div>
        {!irCarrito ? 
          <ItemCount stock={detalles.stock} valorInicial={1} onAdd={onAdd} /> 
            : 
          <div>
              <Link to={`/cart`}> <button>Ir al carrito</button> </Link>
          </div>
        }
    </div>
     </>
  );
}