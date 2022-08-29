import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Catalogo/ItemListContainer';
import ItemDetailContainer from './components/Catalogo/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/Error404/Error';
import Footer from './components/Footer/Footer';
import Cart from './components/Carrito/Cart';
import CartContextProvider from './components/CartContext/CartContext';
import FormBuyer from './components/FormBuyer/FormBuyer';

function App() {
  return (
    <>

    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<FormBuyer/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>

    </>
    );
  
}

export default App;
