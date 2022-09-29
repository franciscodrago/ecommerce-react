import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardWidget from '../CartWidget/CarWidget';

const Navbar = () => {
    return (
        <nav>
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>

<CardWidget/>
        </nav>
    )
}

export default Navbar