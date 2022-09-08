import { useState, useContext } from 'react'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc} from 'firebase/firestore'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'

const FormBuyer = () => {

    const [orderId, setOrderId] = useState('')
    const [formData, setFormData] = useState({name:"", email:"", phone:""})
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
            setFormData({name:"", email:"", phone:""})
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
            <div className="container">
                <div className="py-5 text-center mt-5">
                    <h2 className="mt-5">¡Gracias por su Compra!</h2><br />
                    <h5 className="mt-5">El proceso se ha completado correctamente!</h5><br />
                    <h5>El ID de tu compra es {orderId}</h5><br/>
                    <Link to={`/`}><button className="btn btn-primary bg-gradient me-3 mt-3">Volver al inicio</button></Link>
                </div>
            </div>
        :
        <div className="container mt-5 d-flex bg-dark pt-2">
            <div className="container align-self-center position-relative">
                <div className="row">
                    <div className="col-12">
                        <form className="d-flex flex-column" onSubmit={createOrder} onChange={handleChange}>
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <label>Nombre</label>
                                <input type="name" className="form-control form-control--color" name="name" placeholder="Nombre Completo" defaultValue={formData.name} required />
                            </div>
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <label>Teléfono</label>
                                <input type="text" className="form-control form-control--color" name="phone" placeholder="123-45678910" defaultValue={formData.phone} required />
                            </div>
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <label>Email</label>
                                <input type="email" className="form-control form-control--color" name="email" placeholder="galactic@ejemplo.com" defaultValue={formData.email} required />
                            </div>
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <label className="form-label">Confirmar Email</label>
                                <input type="email" className="form-control form-control--color" name="emailConfirm" placeholder="galactic@ejemplo.com" defaultValue={formData.emailConfirm} required />
                            </div>
                            <div className="mb-3 d-flex flex-column align-items-center">
                                <button className="btn btn-primary bg-gradient" disabled={!formData.name || !formData.phone || !formData.email || formData.email !== formData.emailConfirm || cartList.length === 0}>Comprar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        }
        
        </>
    )
}

export default FormBuyer