import React from 'react'
import CategoryContext from '../context/CategoryContext';
import { useContext } from 'react';
import Category from './Category'
import "../css/ProductCategorySection.css";


const ProductCategorySection = (category_id) => {

    const { categories } = useContext(CategoryContext);

    let displayedCategory = categories;
    const catDisplaySize = 4;

    displayedCategory = categories.slice({ category_id }, catDisplaySize)

    console.log(displayedCategory);
    return (
        <section id="section-category-list">
            <div className='container'>
                {/* <h1>All Categories</h1> */}
                <div className="grid grid-gap-1 grid-col-4">
                    {displayedCategory.map(category => (<Category key={category.id} id={category.id} category_name={category.category_name}
                        category_img={category.category_img} />))}


                </div>
            </div>
        </section>


    )
}

export default ProductCategorySection
