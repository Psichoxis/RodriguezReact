import React, { useEffect } from 'react'
import { useState} from 'react'

export default function ItemCount({stock, valorInicial}) {
    const [total,setTotal] = useState(valorInicial)

    useEffect( () => {
        if(total>stock){
            alert("Cantidad excedente del stock")
            setTotal(stock)
        } 
    })

    return (

      <div>      
            <div>
                <button disabled={total === 1} onClick={() => setTotal(total-1)}>-</button>
                <b>{total}</b>
                <button onClick={() => setTotal(total+1)}>+</button>
            </div>
            <div>
                {<button onClick={() => {alert('Se agregaron ' + total + ' productos correctamente al carrito')} }>Agregar al carrito</button>}
            </div>
        </div>
    )
}

