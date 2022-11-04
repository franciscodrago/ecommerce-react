import './ItemCount.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ItemCount = ({stock, initial = 0, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }

       else {
        Swal.fire({
            title: "No hay mas stock",
            icon: "success",
            buttons: true,
    
        })
   }
   }
   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() =>
                    
                   { onAdd(quantity)
                    Swal.fire({
                        title: "Producto Agregado",
                        icon: "success",
                        buttons: true,
                
                    })
                    
                    
                    
                }}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount

