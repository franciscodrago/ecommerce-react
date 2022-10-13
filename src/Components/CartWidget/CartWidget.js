import cart from  './assets/cart.svg';
import './CartWidget.css';
import React, { useState } from "react";


const CartWidget = () => {
    const [contador, setContador] = useState(0);
    return (
        <div  className='CartWidget' id="Carrito" >
           <img className='CartImg' src={cart} alt='cart'
           onClick={() => setContador(contador + 1)} />
            <span>{contador}</span>
        </div>
    )
}

export default CartWidget 