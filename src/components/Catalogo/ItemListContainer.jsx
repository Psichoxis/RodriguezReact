import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
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
        "url": tiramisu
      },
      {
        "id": 2,
        "idCategoria": "individuales",
        "idItem": "chocooreo",
        "precio": 650,
        "stock": 5,
        "title": "Choco oreo",
        "url": chocooreo
      },
      {
        "id": 3,
        "idCategoria": "individuales",
        "idItem": "brownie",
        "precio": 600,
        "stock": 5,
        "title": "Brownie",
        "url": brownie
      },
      {
        "id": 4,
        "idCategoria": "individuales",
        "idItem": "oreo",
        "precio": 650,
        "stock": 5,
        "title": "Oreo",
        "url": oreo
      },
      {
        "id": 5,
        "idCategoria": "individuales",
        "idItem": "chocoflan",
        "precio": 600,
        "stock": 5,
        "title": "Chocoflan",
        "url": chocoflan
      },
      {
        "id": 6,
        "idCategoria": "individuales",
        "idItem": "chocotorta",
        "precio": 600,
        "stock": 5,
        "title": "Chocotorta",
        "url": chocotorta
      },
      {
        "id": 7,
        "idCategoria": "individuales",
        "idItem": "crema-moka",
        "precio": 600,
        "stock": 5,
        "title": "Crema Moka",
        "url": moka
      },
      {
        "id": 8,
        "idCategoria": "individuales",
        "idItem": "lemon-pie",
        "precio": 600,
        "stock": 5,
        "title": "Lemon Pie",
        "url": lemonpie
      },
      {
        "id": 9,
        "idCategoria": "individuales",
        "idItem": "lemon-brownie",
        "precio": 600,
        "stock": 5,
        "title": "Lemon Brownie",
        "url": lemonbrownie
      },
      {
        "id": 10,
        "idCategoria": "panificacion",
        "idItem": "budin-mandarina",
        "precio": 700,
        "stock": 5,
        "title": "Budín de Mandarina",
        "url": budin
      },
      {
        "id": 11,
        "idCategoria": "panificacion",
        "idItem": "alfajor-maicena",
        "precio": 250,
        "stock": 5,
        "title": "Alfajor de Maicena",
        "url": alfajormaicena
      },
      {
        "id": 12,
        "idCategoria": "panificacion",
        "idItem": "alfajor-choco",
        "precio": 250,
        "stock": 5,
        "title": "Alfajor de Chocolate",
        "url": alfajorchoco
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