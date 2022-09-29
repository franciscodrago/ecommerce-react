import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CartWidget/CarWidget';
import logo from './assets/logo.svg'

const Navbar = () => {
    return (
        <nav>
<ul class="nav">
  <img class="logo" src={logo}/>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tienda</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Nosotros</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href='#'>Contacto</a>
  </li>
</ul>

<CardWidget/>
        </nav>
    )
}

export default Navbar