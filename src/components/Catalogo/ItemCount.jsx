import React, { useEffect } from 'react'
import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount({stock, valorInicial, onAdd}) {
    const [total,setTotal] = useState(valorInicial)

   

    useEffect( () => {
        if(total>stock){
            toast.error('Cantidad excedente del stock.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
                });
            setTotal(stock)
        } else {
            if(total<0){
                toast.error('No se puede colocar esa cantidad.', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    });
                setTotal(stock)
            }
        }
    }, [total, stock])

    return (

      <div>      
            <div>
                <button className="btn btn-primary bg-gradient me-3 mt-3" disabled={total === 1} onClick={() => setTotal(total-1)}>-</button>
                <b className="btn btn-primary bg-gradient me-3 mt-3">{total}</b>
                <button className="btn btn-primary bg-gradient me-3 mt-3" onClick={() => setTotal(total+1)}>+</button>
            </div>
            <div>
                <button className="btn btn-primary bg-gradient me-3 mt-3" disabled={total === 0} onClick={()=> onAdd(total)}>Agregar al carrito</button>
            </div>
            <ToastContainer/>
        </div>
    )
}



