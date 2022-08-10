import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({ detalles }) {

  const [irCarrito, setIrCarrito] = useState(false)

    const onAdd = (total) => {
        console.log("Agregaste " + total + " al carrito!")
        setIrCarrito(true)
    }

  return (
    <>
    <div key={detalles.id} className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={detalles.url} alt=""/></div>
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