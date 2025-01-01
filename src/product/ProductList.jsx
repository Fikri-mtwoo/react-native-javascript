import { useEffect, useRef, useState } from "react"
import Product from "./Product"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [load, setLoad] = useState(false)

    function handleLoad(){
        console.log('click button')
        setLoad(true)
    }

    useEffect(() => {
        console.info('useEffect dengan array kosong []')
    }, [])

    useEffect(() => {
        if (load){
            fetch("/product.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
        }

        //effect clean up
        return () => {
            console.log("Product componen unmounted")
        }
    }, [load])

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleLoad}>load data</button>
            {products.map((product) => 
                <Product key={product.id} product={product}/>
            )}            
        </>
    )
}