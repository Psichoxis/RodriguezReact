/* eslint-disable jsx-a11y/anchor-has-content */
import "./footer.css"

export default function Footer() {
  return (
    <footer className="text-white text-center d-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4 mb-md-0">
          <h5 className="mb-3 mt-2">Síguenos en nuestras redes!</h5>
          <ul className="list-unstyled mb-0">
            <li className="footlist">
              <a href="https://www.facebook.com/Galactic.Cakes" className="aa fa fa-facebook" alt="facebook"></a>
            </li>
            <li className="footlist">
              <a href="https://discord.gg/Y5m6sepWYK" className="aa fab fa-discord" alt="discord"></a>
            </li>
            <li className="footlist">
              <a href="https://www.instagram.com/galactic.cakes/" className="aa fa fa-instagram" alt="instagram"></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 mb-md-0">
          <h5 className="mb-3 mt-2">Encontranos en PedidosYa!</h5>
          <ul className="list-unstyled mb-0">
            <li className="footlist">
              <a href="https://www.pedidosya.com.ar/restaurantes/Santa+Fe/galactic-cake-menu" className="aa fa fa-motorcycle" alt="pedidosya"></a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 mb-md-0">
          <h5 className="mb-3 mt-2">Contacto/Soporte</h5>
          <ul className="list-unstyled">
            <li className="footlist">
              <a href="https://wa.me/5493425412801" className="aa fa fa-whatsapp" alt="numero de contacto"></a>
            </li>
            <li className="footlist">
              <a href="mailto:julietapicatto@hotmail.com" className="aa fa fa-envelope" alt="email de contacto"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <small className="text-center">&copy; 2022 <b>GALACTIC CAKES</b> - Todos los derechos reservados.</small>
  </footer>
  )
}
