import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items,setItems]=useState([])
    const {idCategoria} = useParams()

    useEffect(()=>{

      let postres = [{
        "id": 1,
        "idCategoria": "individuales",
        "idItem": "tiramisu",
        "precio": 600,
        "stock": 5,
        "title": "Tiramisú",
        "url": "../../img/tiramisu.jpeg"
      },
      {
        "id": 2,
        "idCategoria": "individuales",
        "idItem": "chocooreo",
        "precio": 650,
        "stock": 5,
        "title": "Choco oreo",
        "url": "../../img/chocooreo.jpeg"
      },
      {
        "id": 3,
        "idCategoria": "individuales",
        "idItem": "brownie",
        "precio": 600,
        "stock": 5,
        "title": "Brownie",
        "url": "../../img/brownie.jpeg"
      },
      {
        "id": 4,
        "idCategoria": "individuales",
        "idItem": "oreo",
        "precio": 650,
        "stock": 5,
        "title": "Oreo",
        "url": "../../img/oreo.jpeg"
      },
      {
        "id": 5,
        "idCategoria": "individuales",
        "idItem": "chocoflan",
        "precio": 600,
        "stock": 5,
        "title": "Chocoflan",
        "url": "../../img/chocoflan.jpeg"
      },
      {
        "id": 6,
        "idCategoria": "individuales",
        "idItem": "chocotorta",
        "precio": 600,
        "stock": 5,
        "title": "Chocotorta",
        "url": "../../img/chocotorta.jpeg"
      },
      {
        "id": 7,
        "idCategoria": "individuales",
        "idItem": "crema-moka",
        "precio": 600,
        "stock": 5,
        "title": "Crema Moka",
        "url": "../../img/moka.jpeg"
      },
      {
        "id": 8,
        "idCategoria": "individuales",
        "idItem": "lemon-pie",
        "precio": 600,
        "stock": 5,
        "title": "Lemon Pie",
        "url": "../../img/lemonpie.jpeg"
      },
      {
        "id": 9,
        "idCategoria": "individuales",
        "idItem": "lemon-brownie",
        "precio": 600,
        "stock": 5,
        "title": "Lemon Brownie",
        "url": "../../img/lemonbrownie.jpeg"
      },
      {
        "id": 10,
        "idCategoria": "panificacion",
        "idItem": "budin-mandarina",
        "precio": 700,
        "stock": 5,
        "title": "Budín de Mandarina",
        "url": "../../img/budin.jpeg"
      },
      {
        "id": 11,
        "idCategoria": "panificacion",
        "idItem": "alfajor-maicena",
        "precio": 250,
        "stock": 5,
        "title": "Alfajor de Maicena",
        "url": "../../img/alfajormaicena.jpeg"
      },
      {
        "id": 12,
        "idCategoria": "panificacion",
        "idItem": "alfajor-choco",
        "precio": 250,
        "stock": 5,
        "title": "Alfajor de Chocolate",
        "url": "../../img/alfajorchoco.jpeg"
      }]

      const miPromesa = new Promise((res, rej) => {
        setTimeout(() => {
          if(!idCategoria){
            res(postres);
          } else {
            res(postres.filter((producto) => producto.idCategoria === idCategoria));
          }
          
        }, 100);
      });
  
      miPromesa.then((res) => {
        setItems(res);
      });

      }, [idCategoria])
    

  return (
    <>
    <div>
    <ItemList itemx={items}/>
    </div>
    </>
  )
}

export default ItemListContainer