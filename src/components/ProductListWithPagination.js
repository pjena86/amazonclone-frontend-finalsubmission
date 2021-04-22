
import ProductContext from '../context/ProductContext';
import { useState } from "react";
import { useContext } from 'react';
import Product from './Product';
import "../css/ProductList.css";
import ReactPaginate from 'react-paginate';
import "../css/App.css";


const ProductListWithPagination = () => {

    const { products } = useContext(ProductContext);
    const [activePage, setActivePage] = useState([0]);

    const handlePageChange = ({ selected }) => {
        console.log(`active page is ${activePage}`);
        setActivePage(selected);
        window.scrollTo(0,0);
    }

    const productsPerPage = 12;
    const displayedProducts = activePage * productsPerPage;
    const totalNumOfProducts = products.length;
    const totalExpectedPages = Math.ceil(totalNumOfProducts / productsPerPage);



    const listOfAllProducts = products.slice(displayedProducts, displayedProducts + productsPerPage).map(product => {
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
                {/* {products.map(product => (<Product key={product.id} id={product.id} title={product.title}
                    category_name={product.category_name} image={product.image} price={product.price} countInStock={product.countInStock}
                    brand={product.brand} rating={product.rating} numReviews={product.numReviews}
                    description={product.description} IsBestSeller={product.bestSeller} />))} */}

            </div>

            <div>


                <ReactPaginate
                // className ="product-pagination"
                    // pageRangeDisplayed={5}
                    // totalItemsCount={totalNumOfProducts}
                    // pageCount={totalExpectedPages}
                    // onPageChange={handlePageChange}
                    // containerClassName={"paginationBttns"}
                    // previousLinkClassName={"previousBttn"}
                    // nextLinkClassName={"nextBttn"}
                     //disabledClassName={"paginationDisabled"}
                    // activeClassName={"paginationActive"}
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={totalExpectedPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                            
                    />
                    
            </div>

        </div>
    )
}

export default ProductListWithPagination
