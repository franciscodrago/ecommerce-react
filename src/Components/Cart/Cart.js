import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button className="Button"  onClick={() =>{ clearCart()
                 Swal.fire({
                    title: "Carrito Vacio",
                    icon: "success",
                    buttons: true,
                    dangerMode: true,
                
                })
                }}
              >Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart