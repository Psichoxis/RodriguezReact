import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [formData, setFormData] = useState({
        name:"", email:"", phone:""
    })
    const { cartList, totalCompra, vaciarCarrito } = useContext(CartContext)


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const createOrder = (e) => {
        e.preventDefault();
        let order = {}
        order.date = Timestamp.fromDate(new Date())
        order.buyer = formData
        order.total = totalCompra()

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const precio = cartItem.precio
            const cantidad = cartItem.cantidad
            const totalPrecio = cartItem.precio * cartItem.cantidad
            return {id, title, precio, cantidad, totalPrecio}
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => { 
            updateStock()
            vaciarCarrito()
            setFormData({
                name:"", email:"", phone:""
            })
        })

        function updateStock() {
            const batch = writeBatch(db)

            order.items.map(elem => {
                let updateDoc = doc(db, 'items', elem.id)
                let currentStock = cartList.find(item => item.id === elem.id).stock

                batch.update( updateDoc, {
                    stock: currentStock - elem.cantidad
                })
            })

            batch.commit()
        }
    }

    return (
        <> 
        {orderId
        ? 
                <div>
                    <h4>La compra se ha realizado exitosamente.</h4>
                    <strong>El ID de tu compra es {orderId}</strong><br />
                    <Link to={`/`}><strong>Volver al inicio</strong></Link>
                </div>
        :
                        <div className="col-12">
                            <form onSubmit={createOrder} onChange={handleChange}>
                                <div>
                                    <label>Nombre</label>
                                    <input type="name" className="form-control form-control--color" name="name" placeholder="Nombre" defaultValue={formData.name} required />
                                </div>
                                <div>
                                    <label>Teléfono</label>
                                    <input type="text" className="form-control form-control--color" name="phone" placeholder="123-45678910" defaultValue={formData.phone} required />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type="email" className="form-control form-control--color" name="email" placeholder="galactic@ejemplo.com" defaultValue={formData.email} required />
                                </div>
                                <button>Comprar</button>
                            </form>
                        </div>
        }
        </>
    )
}

export default FormBuyer