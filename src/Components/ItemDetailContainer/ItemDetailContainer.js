import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDocs, collection, getDoc, doc } from 'firebase/firestore' 
import { db } from '../../services/firebase'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    console.log(productId)

const navigate= useNavigate()

    useEffect(() => {

        const docRef= doc(db, 'products', productId)


        getDoc(docRef).then(response =>{
            console.log(response)
            const data= response.data()
            const productsAdapted = { id: response.id, ...data}
            setProduct(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })
        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <button className='Option' onClick={() => navigate(-1)} >Listado de Productos</button>
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer