import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import tiramisu from "../../img/tiramisu.jpeg"
import chocooreo from "../../img/chocooreo.jpeg"
import brownie from "../../img/brownie.jpeg"
import oreo from "../../img/oreo.jpeg"
import chocoflan from "../../img/chocoflan.jpeg"
import chocotorta from "../../img/chocotorta.jpeg"
import moka from "../../img/moka.jpeg"
import lemonpie from "../../img/lemonpie.jpeg"
import lemonbrownie from "../../img/lemonbrownie.jpeg"
import budin from "../../img/budin.jpeg"
import alfajormaicena from "../../img/alfajormaicena.jpeg"
import alfajorchoco from "../../img/alfajorchoco.jpeg"

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
      "url": tiramisu
    },
    {
      "id": 2,
      "idItem": "chocooreo",
      "precio": 650,
      "stock": 5,
      "title": "Choco oreo",
      "description": "Base de galletita oreo, crema chocolina, galletitas chocolina en el medio, crems oreo y una capa de galletita oreo arriba.",
      "url": chocooreo
    },
    {
      "id": 3,
      "idItem": "brownie",
      "precio": 600,
      "stock": 5,
      "title": "Brownie",
      "description": "Pedacitos de brownie con crema chocolina y rocklets.",
      "url": brownie
    },
    {
      "id": 4,
      "idItem": "oreo",
      "precio": 650,
      "stock": 5,
      "title": "Oreo",
      "description": "Galletitas oreo, dulce de leche, crema oreo.",
      "url": oreo
    },
    {
      "id": 5,
      "idItem": "chocoflan",
      "precio": 600,
      "stock": 5,
      "title": "Chocoflan",
      "description": "Flan de vainilla, gotitas de chocolate semi-amargo y crema chantilly.",
      "url": chocoflan
    },
    {
      "id": 6,
      "idItem": "chocotorta",
      "precio": 600,
      "stock": 5,
      "title": "Chocotorta",
      "description": "Galletitas chocolina, crema chocolina.",
      "url": chocotorta
    },
    {
      "id": 7,
      "idItem": "crema-moka",
      "precio": 600,
      "stock": 5,
      "title": "Crema Moka",
      "description": "Crema chantilly con crema cafe y vainillitas.",
      "url": moka
    },
    {
      "id": 8,
      "idItem": "lemon-pie",
      "precio": 600,
      "stock": 5,
      "title": "Lemon Pie",
      "description": "Base de tarta, crema de limon, merengue.",
      "url": lemonpie
    },
    {
      "id": 9,
      "idItem": "lemon-brownie",
      "precio": 600,
      "stock": 5,
      "title": "Lemon Brownie",
      "description": "Base de brownie, crema de limon, merengue.",
      "url": lemonbrownie
    },
    {
      "id": 10,
      "idItem": "budin-mandarina",
      "precio": 700,
      "stock": 5,
      "title": "Budín de Mandarina",
      "description": "Postre individual a base de Vainillas con café y crema.",
      "url": budin
    },
    {
      "id": 11,
      "idItem": "alfajor-maicena",
      "precio": 250,
      "stock": 5,
      "title": "Alfajor de Maicena",
      "description": "Tapitas con relleno de dulce de leche y coco rallado.",
      "url": alfajormaicena
    },
    {
      "id": 12,
      "idItem": "alfajor-choco",
      "precio": 250,
      "stock": 5,
      "title": "Alfajor de Chocolate",
      "description": "Tapitas con relleno de dulce de leche y baño de chocolate.",
      "url": alfajorchoco
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