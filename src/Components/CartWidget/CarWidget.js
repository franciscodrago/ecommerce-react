import cart from  './assets/cart.svg';
import './CartWidget.css';
import React, { useState } from "react";


const CardWidget = () => {
    const [contador, setContador] = useState(0);
    return (
        <div id="Carrito" >
           <img class="cartimg" src={cart} alt='cart'
           onClick={() => setContador(contador + 1)} />
            <span>{contador}</span>
        </div>
    )
}

export default CardWidget