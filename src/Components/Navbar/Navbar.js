import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import logo from './assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {

  const [categories, setCategories] = useState([])

  useEffect(() =>{

    const collectionRef = collection(db, 'categories')
    getDocs(collectionRef).then(response =>{
      
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        
        return{id, ...data}
      })
      setCategories(categoriesAdapted)
    })
  }, [])
  return (
    <nav className="NavBar" >
      <NavLink to='/'>
          <img className='logo' src={logo}></img>
      </NavLink>

        <div className="Categories">
{
  categories.map(cat => (
    <NavLink key={cat.id} to={ `/category/${cat.slug}`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
  ))
}
        </div>
        < CartWidget />
    </nav>
  )
}

export default NavBar