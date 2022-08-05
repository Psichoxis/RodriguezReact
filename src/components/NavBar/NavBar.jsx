import React from 'react'
import CartWidget from './CartWidget'
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light">
    <div className="container-fluid">
      <Link to={"/"} className="navbar-brand col-lg-6"><img src={logo} alt="" width="80" height="80" className="d-inline-block align-text-center"/>
        Galactic Cakes</Link>
      <button className="navbar-toggler col-lg-6" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/categoria/individuales"} className="nav-link">Individuales</Link>
          </li>
          <li className="nav-item">
            <Link to={"/categoria/panificacion"} className="nav-link">Panificacion</Link>
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