import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <h3>Ecommerce</h3>
      </NavLink>

        <div className="Categories">
            <NavLink to={'/category/Buzos'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
            <NavLink to={'/category/Jeans'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Jeans</NavLink>
            <NavLink to={'/category/Joggers'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Joggers</NavLink>
            <NavLink to={'/category/Camperas'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
        </div>
        < CartWidget />
    </nav>
  )
}

export default NavBar