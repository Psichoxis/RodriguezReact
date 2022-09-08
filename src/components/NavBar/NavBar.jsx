import React from 'react'
import CartWidget from '../Carrito/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = ({cartCount}) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-danger">
    <div className="container-fluid">
      <Link to={"/"} className="navbar-brand mx-auto col-lg-4"><img src="https://firebasestorage.googleapis.com/v0/b/galacticcakess.appspot.com/o/logo.png?alt=media&token=b11f188d-2397-48ed-8d59-41125c2914d4" alt="" width="80" height="80" className="d-inline-block align-text-center m-4 rounded-pill"/>
        GALACTIC CAKES</Link>
      <button className="navbar-toggler col-lg-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to={"/categoria/individuales"} className="nav-link">INDIVIDUALES</Link>
          </li>
          <li className="nav-item">
            <Link to={"/categoria/panificacion"} className="nav-link">PANIFICACIÓN</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 text-center justify-center">
          <CartWidget cartCount={cartCount} />
      </div>
    </div>
    </nav>

  )
}

export default NavBar