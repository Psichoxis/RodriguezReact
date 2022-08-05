import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({precio,title,url,idItem}) => {

  return (

    <div className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={url} alt="" /></div>
        <div><b>{title}</b></div>
        <div><b>Precio: ${precio}</b></div>
        <button><Link to={`/item/${idItem}`}>Saber más!</Link></button>
    </div>

  )
}

export default Item