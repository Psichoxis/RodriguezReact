import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const [detalles,setDetalles]=useState({})
  const {idItem} = useParams()
  
  useEffect(()=>{
    
    const detallesPostres = [{
      "id": 1,
      "idItem": "tiramisu",
      "precio": 600,
      "stock": 5,
      "title": "Tiramisú",
      "description": "Postre individual a base de Vainillas con café y crema",
      "url": "../../img/tiramisu.jpeg"
    },
    {
      "id": 2,
      "idItem": "chocooreo",
      "precio": 650,
      "stock": 5,
      "title": "Choco oreo",
      "description": "Base de galletita oreo, crema chocolina, galletitas chocolina en el medio, crems oreo y una capa de galletita oreo arriba.",
      "url": "../../img/chocooreo.jpeg"
    },
    {
      "id": 3,
      "idItem": "brownie",
      "precio": 600,
      "stock": 5,
      "title": "Brownie",
      "description": "Pedacitos de brownie con crema chocolina y rocklets.",
      "url": "../../img/brownie.jpeg"
    },
    {
      "id": 4,
      "idItem": "oreo",
      "precio": 650,
      "stock": 5,
      "title": "Oreo",
      "description": "Galletitas oreo, dulce de leche, crema oreo.",
      "url": "../../img/oreo.jpeg"
    },
    {
      "id": 5,
      "idItem": "chocoflan",
      "precio": 600,
      "stock": 5,
      "title": "Chocoflan",
      "description": "Flan de vainilla, gotitas de chocolate semi-amargo y crema chantilly.",
      "url": "../../img/chocoflan.jpeg"
    },
    {
      "id": 6,
      "idItem": "chocotorta",
      "precio": 600,
      "stock": 5,
      "title": "Chocotorta",
      "description": "Galletitas chocolina, crema chocolina.",
      "url": "../../img/chocotorta.jpeg"
    },
    {
      "id": 7,
      "idItem": "crema-moka",
      "precio": 600,
      "stock": 5,
      "title": "Crema Moka",
      "description": "Crema chantilly con crema cafe y vainillitas.",
      "url": "../../img/moka.jpeg"
    },
    {
      "id": 8,
      "idItem": "lemon-pie",
      "precio": 600,
      "stock": 5,
      "title": "Lemon Pie",
      "description": "Base de tarta, crema de limon, merengue.",
      "url": "../../img/lemonpie.jpeg"
    },
    {
      "id": 9,
      "idItem": "lemon-brownie",
      "precio": 600,
      "stock": 5,
      "title": "Lemon Brownie",
      "description": "Base de brownie, crema de limon, merengue.",
      "url": "../../img/lemonbrownie.jpeg"
    },
    {
      "id": 10,
      "idItem": "budin-mandarina",
      "precio": 700,
      "stock": 5,
      "title": "Budín de Mandarina",
      "description": "Postre individual a base de Vainillas con café y crema.",
      "url": "../../img/budin.jpeg"
    },
    {
      "id": 11,
      "idItem": "alfajor-maicena",
      "precio": 250,
      "stock": 5,
      "title": "Alfajor de Maicena",
      "description": "Tapitas con relleno de dulce de leche y coco rallado.",
      "url": "../../img/alfajormaicena.jpeg"
    },
    {
      "id": 12,
      "idItem": "alfajor-choco",
      "precio": 250,
      "stock": 5,
      "title": "Alfajor de Chocolate",
      "description": "Tapitas con relleno de dulce de leche y baño de chocolate.",
      "url": "../../img/alfajorchoco.jpeg"
    }]
    
      const miPromesa = new Promise((res, rej) => {
        setTimeout(() => {
          if(idItem){
            const products = detallesPostres.filter((producto) => producto.idItem === idItem)
            if(products.length > 0){
              return res(products[0]);
            }
          }
          return rej('Producto no encontrado')    
        }, 2000);
      });
  
      miPromesa.then((res) => setDetalles(res))

      }, [idItem])


  return (<ItemDetail detalles={detalles}/>)
}

export default ItemDetailContainer