import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
   
    const { addItem, isInCart } = useContext(CartContext)
 
   

    const handleOnAdd = (quantity) => {
        const productToAdd = {
           id,
           name,
           price
        }

        addItem(productToAdd, quantity)
     
       
    }
 

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="Img"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    !isInCart(id) 
                        ? <ItemCount onAdd={handleOnAdd} stock={stock} />
                        : <Link to='/cart' className='Option'>Finalizar compra</Link>
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail