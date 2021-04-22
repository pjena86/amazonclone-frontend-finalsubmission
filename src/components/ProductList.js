import React from 'react';
import ProductContext from '../context/ProductContext';
import { useState } from "react";
import { useContext } from 'react';
import Product from './Product';
import "../css/ProductList.css";
import ReactPaginate from 'react-paginate';
import Pagination from 'react-js-pagination';


const ProductList = () => {
    const { products } = useContext(ProductContext);
    const [pageNum, setPageNum] = useState([1]);
    //const [ProductList, setProductList] = useState(listOfAllProducts)

    const productsPerPage = 12;
    const viewedProducts = pageNum * productsPerPage;
    const totalNumOfProducts = products.length;
    const count = Math.ceil(totalNumOfProducts / productsPerPage);

    // const handlePageClick = ({selectedPage})=>{
    //     setPageNum(selectedPage);
    //     window.scrollTo(0,0);

    // }

    const handlePageClick = (e) => {
        setPageNum(e.selectedPage);
        // return 
        // window.scrollTo(0,0);

    }

    const listOfAllProducts = products.slice(viewedProducts, viewedProducts + productsPerPage).map(product => {
        return <Product key={product.id} id={product.id} title={product.title}
            category_name={product.category_name} image={product.image} price={product.price} countInStock={product.countInStock}
            brand={product.brand} rating={product.rating} numReviews={product.numReviews}
            description={product.description} IsBestSeller={product.IsBestSeller} />

    })


    return (

        <div className='container'>
            <h4>All Products</h4>
            <div className="grid grid-gap-1 grid-col-4">
                {listOfAllProducts}
            </div>

            <div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakClassName={"break-me"}
                    pageCount={count}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"page-link"}
                    NextLinkClassName={"page-link"}
                    disabledClassName={"page-link-disabled"}
                    activeClassName={"page-link-active"}
                />
            </div>

        </div>
    )
}

export default ProductList
