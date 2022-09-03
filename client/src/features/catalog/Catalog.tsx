
import { useEffect, useState } from "react";
import { Product } from "../../../models/product";
import ProductList from "./ProductList";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        fetch('http://localhost:5163/api/controller')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <ProductList
                products={products}
            />

        </>
    )
}