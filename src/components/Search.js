import React from 'react'
import { useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Product from './Product';

import "../css/SearchBox.css";

const Search = (id) => {

    const { products } = useContext(ProductContext);

    const [searchProduct, setSearchProduct] = useState("");

    const filteredProducts = products.filter((product) => {
        if (
            product.title.toLowerCase().includes(searchProduct) ||
            product.description.toLowerCase().includes(searchProduct)
        ) {
            return product;
        }
    });

    return (
        <div className="header">
            <div className="header_searchBar">
                <input className="header_searchBarInput" type="text" onChange={(e) => {
                    setSearchProduct(e.target.value.toLowerCase());

                }} />

                <button className="header_searchIcon" type="submit">
                    <SearchIcon /></button>
            </div>

            <div className="display">
                
                    
                    {/* {filteredProducts.map(product => (
                        <Product key={product.id} id={product.id} title={product.title}
                            category_name={product.category_name} image={product.image} price={product.price} countInStock={product.countInStock}
                            brand={product.brand} rating={product.rating} numReviews={product.numReviews}
                            description={product.description} IsBestSeller={product.IsBestSeller} />))} */}
                
            </div>
        </div>

    )
}

export default Search
