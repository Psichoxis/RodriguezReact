import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const [detalles,setDetalles]=useState({})
  let {idItem} = useParams()

    useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db, 'items', idItem )
      getDoc(queryDb).then(res => setDetalles( { id: res.id, ...res.data() } ))
  },[idItem])
  

  return (<ItemDetail detalles={detalles}/>)
}

export default ItemDetailContainer

