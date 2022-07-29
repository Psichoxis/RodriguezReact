import React from 'react'
import CartWidget from './CartWidget'
import logo from '../../img/logo.png';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light">
    <div className="container-fluid">
      <a className="navbar-brand col-lg-6" href="index.html">
        <img src={logo} alt="" width="80" height="80" className="d-inline-block align-text-center"/>
        Galactic Cakes</a>
      <button className="navbar-toggler col-lg-6" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../../public/aboutus.html">¿Quienes Somos?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../../../public/contacto.html">Contacto</a>
          </li>
        </ul>
      </div>
      <div>
          <CartWidget />
      </div>
    </div>
    </nav>

  )
}

export default NavBar