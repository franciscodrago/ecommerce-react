import {  useState, useEffect, useRef } from "react"

const useMyRef = (inital) => useState({ current: inital})[0]

const Scroll = () => {
    const [background, setBackground] = useState('orange')

    const divRef = useRef()
    console.log(divRef)

    console.log(useMyRef())

    useEffect(() => {
        const onScroll = () =>{
         console.log(divRef)
        }
    
      window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [] )
    return (

        <div>
            <div ref={divRef} style={{background: background, height: '180vh', margin: 30}}>
                <h1>
                    crollear para cambiar color
                </h1>
            </div>
        </div>
    )
}

export default Scroll

const useRef2 = (inital) => useState({ current: inital})[0]