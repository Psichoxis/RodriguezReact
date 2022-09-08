import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({precio,title,url,idItem}) => {

  return (

  <div className="card text-white bg-primary mb-3 w-25 d-inline-flex justify-content-around text-center m-2 rounded">
    <div className="card-header"><h5>{title}</h5></div>
    <div><img src={url} alt="" className='img-detail rounded mt-3'/></div>
    <div className="card-body">
      <h6 className="card-title"><b>Precio: ${precio}</b></h6>
    </div>
    <div className="card-footer text-center">             
      <Link to={`/item/${idItem}`}><button className='btn btn-info bg-gradient'>Saber más!</button></Link>
    </div>
  </div>

  )
}

export default Item