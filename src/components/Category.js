import React from 'react';
import { Link } from "react-router-dom";
import "../css/Category.css";

function Category({ id, category_name, category_img }) {

    const alt = `${category_name} Image `;
    const source = `../images/${category_img}`;

    return (
        <div className="category-card">

            <Link to={"categories/products/" + category_name}>
                <img src={source} alt={alt} />
            </Link>

            <div className="categoryContent">

                <h3>{category_name}</h3>

            </div>
        </div>
    )
}

export default Category
