
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'



const Item = ({id, name, img, price }) => {
  

    const handleClick = (e) => {
console.log('hice click en Item')

    }

    return (
        <article className="CardItem" onClick={handleClick }>
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>           
            <footer className='ItemFooter'>
               <Link className='detalle' to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item