import React, { createContext, useState } from 'react'

export const CartContext = createContext([])


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item){

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const oldItem = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + oldItem}])
        } else {
            setCartList([...cartList, item])
        }
    }

    const eliminarItem = (id) => {
        const carritoFiltrado = cartList.filter((item) => item.id !== id)
        setCartList(carritoFiltrado)
    }

    function vaciarCarrito(){
        setCartList([])
    }

    const totalCompra = () => {
        return ( 
            cartList.reduce((prev, item) => (prev + item.cantidad * item.precio), 0)
        )
    }


    return (
        <CartContext.Provider value={{cartList,agregarAlCarrito,vaciarCarrito,eliminarItem,totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider