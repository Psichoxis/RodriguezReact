import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [detalles,setDetalles]=useState([])

    useEffect(()=>{
      setTimeout(()=>{
        setDetalles([{
            "id": 1,
            "precio": 500,
            "stock": 5,
            "title": "Tiramisú",
            "description": "Postre individual a base de Vainillas con café y crema",
            "url": "../../img/tiramisu.jpeg"
        }])
      }, 2000);
      },[detalles])

  return (<ItemDetail detalles={detalles}/>)
}

export default ItemDetailContainer