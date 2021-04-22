import React from 'react';
import { useState, useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import "../css/BestSellerSection.css";
import Product from './Product';
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";


const responsive = {
    desktop: {
        breakpoint: { max: 2000, min: 1000 },
        items: 4,
        paritialVisibilityGutter: 60
    }

};
;

const BestSellerSection = () => {

    const { products } = useContext(ProductContext);

    const bestSellerProducts = products.filter((product) => {
        return product.bestSeller === true;

    })

    // const size = bestSellerProducts.length;
    // console.log(size);

    console.log(bestSellerProducts);

    // const Simple = ({ deviceType }) => {

    return (

        <>

            <div className="carousel-content">
                <Carousel
                    //   ssr
                    partialVisbile
                    //   deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}>

                    {bestSellerProducts.slice(0, bestSellerProducts.length).map(product => {
                        return (
                            <div className="carousel-product-card">
                                <Product key={product.id} id={product.id} title={product.title}
                                    category_name={product.category_name} image={product.image} price={product.price} countInStock={product.countInStock}
                                    brand={product.brand} rating={product.rating} numReviews={product.numReviews}
                                    description={product.description} IsBestSeller={product.IsBestSeller}
                                    draggable={true} />


                            </div>
                        );
                    })}

                </Carousel>
            </div>

        </>


    )

}

export default BestSellerSection
