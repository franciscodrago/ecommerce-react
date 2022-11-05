import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getProducts } from '../../services/firebase/firestore/products'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    
    const getProductsFromFirestore = () => getProducts(productId)

    const { data: product, error, loading } = useAsync(getProductsFromFirestore, [productId])




if(error) {
return  <h1>Oops! Ha habido un error</h1>
}


    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >

            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer