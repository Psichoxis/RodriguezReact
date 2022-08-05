import React from 'react'
import Detail from './Detail'

export default function ItemDetail({ detalles }) {
  return (
    <>
      {detalles.map((producto) => (
        <Detail key={producto.id} idItem={producto.idItem} precio={producto.precio} description={producto.description} stock={producto.stock} title={producto.title} url={producto.url} />
      ))}
    </>
  );
}