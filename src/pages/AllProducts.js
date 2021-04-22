import React from 'react'
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import ProductList from '../components/ProductList'
import "../css/ProductList.css";
import Footer from "../components/Footer"
import ProductListWithPagination from '../components/ProductListWithPagination';
const AllProducts = () => {


    return (
        <div className="all-products" style={{ backgroundColor: '#b3d1ff' }}>
            <Header />
            <NavigationBar />
            {/* <ProductList/> */}
            <ProductListWithPagination />

            <Footer />
        </div>
    )

}

export default AllProducts
