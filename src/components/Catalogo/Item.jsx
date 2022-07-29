import React from 'react'
import ItemCount from './ItemCount'

const Item = ({precio,stock,title,url}) => {

  return (

    <div className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={url} alt="" /></div>
        <div><b>{title}</b></div>
        <div><b>Precio: ${precio}</b></div>
        <ItemCount stock={stock} valorInicial="1"/>
    </div>

  )
}

export default Item