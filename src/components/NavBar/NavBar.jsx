import React from 'react'
import CartWidget from './CartWidget'
import logo from '../../img/logo.png';

const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark text-light">
    <div class="container-fluid">
      <a class="navbar-brand col-lg-6" href="index.html">
        <img src={logo} alt="" width="80" height="80" class="d-inline-block align-text-center"/>
        Galactic Cakes</a>
      <button class="navbar-toggler col-lg-6" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">¿Quienes Somos?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Contacto</a>
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