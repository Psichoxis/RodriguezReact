import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({precio,title,url,idItem}) => {

  return (

    <div className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={url} alt="" className='img-detail rounded'/></div>
        <div><b>{title}</b></div>
        <div><b>Precio: ${precio}</b></div>
        <button className='btn btn-dark'><Link to={`/item/${idItem}`} className="text-decoration-none">Saber más!</Link></button>
    </div>

  )
}

export default Item