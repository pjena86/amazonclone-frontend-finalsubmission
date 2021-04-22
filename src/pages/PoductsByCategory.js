import React from 'react'
import ListProductsOnCategory from '../components/ListProductsOnCategory'
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer"

const PoductByCategory = () => {


    let styles = {

        backgroundColor: ' #9dc1ce',
        
      };

    return (
        <div style={styles}>
            <div className="Header">
            <Header />
            </div>
            <div className="nav-bar">
            <NavigationBar />
            </div>
            <div className="page-body">
            <ListProductsOnCategory/>
            <Footer />
            </div>
            {/* </div> */}
        </div>
    )
}

export default PoductByCategory
