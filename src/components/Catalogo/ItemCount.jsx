import React, { useEffect } from 'react'
import { useState} from 'react'
import oreo from '../../img/oreo.jpeg'

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
        <div class="card">
                <img src={oreo} class="card-img-top imgsize" alt="oreo"/>
            <div class="card-body">
                <h5 class="card-title">Oreo</h5>
                <p class="card-text">Galletitas oreo, dulce de leche, crema oreo.</p>
            </div>
            <div class="card-body">
                <button disabled={total === 1} onClick={() => setTotal(total-1)}>-</button>
                <b>{total}</b>
                <button onClick={() => setTotal(total+1)}>+</button>
            </div>
            <div>
                {<button onClick={() => {alert('Se agregaron ' + total + ' oreo correctamente al carrito')} }>Agregar al carrito</button>}
            </div>
        </div>
      </div>
    )
}

