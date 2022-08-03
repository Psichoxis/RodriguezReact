import React from 'react'

const Item = ({precio,title,url}) => {

  return (

    <div className='card bg-info w-25 p-4 d-inline-flex gap-4 text-center m-2 rounded'>
        <div><img src={url} alt="" /></div>
        <div><b>{title}</b></div>
        <div><b>Precio: ${precio}</b></div>
        <button><a href="">Saber más!</a></button>
    </div>

  )
}

export default Item