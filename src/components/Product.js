import React from 'react';
import { Link } from "react-router-dom";
import "../css/Product.css";


const Product = ({ id, title, image, price }) => {

    const alt = `${title} Image `;
    const source = `/images/${image}`;


    return (
        <div className="container">
                    <div className="product-grid2">
                        <div className="product-image2">
                            <a href={"/products/" + id}> <img className="pic-1" src={source} alt={alt} /> </a>
                            <div className="product-content">
                                <h5>{title}</h5>
                                <p>${price}</p>
                                <button>Add to Cart</button>
                            </div>



                        </div>
                    </div>
                {/* </div> */}
            {/* </div> */}
        </div>

    )
}

export default Product
