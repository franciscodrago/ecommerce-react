import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import Swal from 'sweetalert2';


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }


    return (
        <article className='CardCartItem'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {name}
                </h2>
            </header>
            <section className='ContainerItemCartItem'>
                <p className="InfoCartItem">
                    Cantidad: {quantity}
                </p>
                <p className="InfoCartItem">
                    Precio x Unidad: ${price}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     Subtotal: ${price * quantity}
                 </p>
                
                 <button className='ButtonCartItem' onClick={() =>{ handleRemove(id)
                
                Swal.fire({
                    title: "Producto Eliminado",
                    icon: "warning",
                    buttons: true,
                })
            }
                
                }>🗑️</button>
            </footer>
        </article>
    )
}

export default CartItem