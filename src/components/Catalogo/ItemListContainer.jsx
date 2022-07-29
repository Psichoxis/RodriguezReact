import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items,setItems]=useState([])

    useEffect(()=>{
      setTimeout(()=>{
        setItems([
          {
            "id": 1,
            "precio": 500,
            "stock": 5,
            "title": "Tiramisú",
            "url": "../../img/tiramisu.jpeg"
          },
          {
            "id": 2,
            "precio": 550,
            "stock": 5,
            "title": "Choco oreo",
            "url": "../../img/chocooreo.jpeg"
          },
          {
            "id": 3,
            "precio": 500,
            "stock": 5,
            "title": "Brownie",
            "url": "../../img/brownie.jpeg"
          },
          {
            "id": 4,
            "precio": 550,
            "stock": 5,
            "title": "Oreo",
            "url": "../../img/oreo.jpeg"
          },
          {
            "id": 5,
            "precio": 500,
            "stock": 5,
            "title": "Chocoflan",
            "url": "../../img/chocoflan.jpeg"
          },
          {
            "id": 6,
            "precio": 500,
            "stock": 5,
            "title": "Chocotorta",
            "url": "../../img/chocotorta.jpeg"
          },
          {
            "id": 7,
            "precio": 500,
            "stock": 5,
            "title": "Crema Moka",
            "url": "../../img/moka.jpeg"
          },
          {
            "id": 8,
            "precio": 500,
            "stock": 5,
            "title": "Lemon Pie",
            "url": "../../img/lemonpie.jpeg"
          },
          {
            "id": 9,
            "precio": 500,
            "stock": 5,
            "title": "Lemon Brownie",
            "url": "../../img/lemonbrownie.jpeg"
          },
          {
            "id": 10,
            "precio": 700,
            "stock": 5,
            "title": "Budín de Mandarina",
            "url": "../../img/budin.jpeg"
          },
          {
            "id": 11,
            "precio": 250,
            "stock": 5,
            "title": "Alfajor de Maicena",
            "url": "../../img/alfajormaicena.jpeg"
          },
          {
            "id": 12,
            "precio": 250,
            "stock": 5,
            "title": "Alfajor de Chocolate",
            "url": "../../img/alfajorchoco.jpeg"
          }]
        )
      }, 2000);
      },[])
    

  return (
    <>
    <div>
    <ItemList itemx={items}/>
    </div>
    </>
  )
}

export default ItemListContainer