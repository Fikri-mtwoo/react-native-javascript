import { useEffect, useRef, useState } from "react"
import Product from "./Product"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const loadStatus = useRef(false)

    useEffect(() => {
        if (loadStatus.current === false){
            fetch("/product.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .then(() => loadStatus.current = true);
        }

        //effect clean up
        return () => {
            console.log("Product componen unmounted")
        }
    })

    return (
        <>
            <h1>Product List</h1>
            {products.map((product) => 
                <Product key={product.id} product={product}/>
            )}            
        </>
    )
}