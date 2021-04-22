import React from 'react';
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import Product from './Product';
import { useParams } from 'react-router';
import "../css/ListProductsOnCategory.css";



const ListProductsOnCategory = () => {

    const { products } = useContext(ProductContext);
    const { category_name } = useParams();


    const prodByCategory = products.filter((product) => {
        return category_name === product.category_name;
        //return product.category_name === "Clothes"
    });

    console.log(prodByCategory);

    return (
        <section className="product-by-category-container">
            <div className="products-by-category-card">
                {prodByCategory.map(product => (<Product key={product.id} id={product.id} title={product.title}
                    category_name={product.category_name} image={product.image} price={product.price} countInStock={product.countInStock}
                    brand={product.brand} rating={product.rating} numReviews={product.numReviews}
                    description={product.description} IsBestSeller={product.IsBestSeller} />))}
            </div>
        </section>

    )
}

export default ListProductsOnCategory
