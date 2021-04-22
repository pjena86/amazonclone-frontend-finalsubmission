import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserRegistration from "../pages/UserRegistration";
import "../css/App.css";
import "../css/Home.css";
import { useEffect, useState } from 'react';
import ProductContext from "../context/ProductContext";
import CategoryContext from "../context/CategoryContext";
import AllProducts from "../pages/AllProducts";
import ProductDesc from "../pages/ProductDesc";
import Search from "./Search";
import UserSignIn from "../pages/UserSignIn";
import BestSellerSection from "./BestSellerSection";
import { Dashboard } from "../pages/Dashboard";
// import SearchProduct from "../pages/SearchProduct";
import PoductsByCategory from "../pages/PoductsByCategory";



const App = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {

    fetch("http://localhost:5055/products")

      .then(res => {
        return res.json();
      })
      .then(data => {
        // body: JSON.stringify(data)
        setProducts(data.body);
        console.log(data.body);
        console.log(data);
      });

    fetch("http://localhost:5055/categories")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setCategories(data.body);
        console.log(data.body);
      });

  }, [])


  return (

    <ProductContext.Provider value={{ products }} >
      <CategoryContext.Provider value={{ categories }}>
        {/* <SearchBox onFilter ={filterProducts}/> */}
        <Router>
          <Switch>
            <Route >
              <Route exact path="/"> <Home /></Route>
              {/* <Route exact path="/search"><SearchBox /></Route> */}
              <Route exact path="/signin"><UserSignIn /> </Route>
              <Route path="/register"><UserRegistration /></Route>
              <Route path="/dashboard"><Dashboard /></Route>
              <Route exact path="/search/products"><Search /></Route>
              <Route exact path="/products"> <AllProducts /></Route>
              <Route exact path="/products/:id"><ProductDesc /></Route>
              <Route exact path="/categories/products/:category_name/"><PoductsByCategory /></Route>
              <Route exact path="/products/:IsBestSeller"><BestSellerSection /></Route>

            </Route>
          </Switch>
        </Router>
      </CategoryContext.Provider>
    </ProductContext.Provider>
  )
}

export default App;
