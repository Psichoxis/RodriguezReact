import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [items,setItems]=useState([])
    const {idCategoria} = useParams()

    useEffect(()=>{
     
     const db = getFirestore();
     if (idCategoria) {
       const queryCCategorias = query(collection(db, 'items'), where('categoria', '==', idCategoria) )
       getDocs(queryCCategorias)
       .then(res => setItems( res.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      } else {
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(res => setItems( res.docs.map(prod => ({ id: prod.id, ...prod.data()}))))
      } 

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