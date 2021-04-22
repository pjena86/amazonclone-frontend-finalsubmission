import React from 'react'
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
    return (
        <div className="header">

            <div className="header_menu">
                <MenuIcon />
                {/* <span className="menu_All">All</span> */}
            </div>


            <img className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="headerLogo" />




            <div className="header_searchBar">
                {/* <input className="header_searchBarInput" type="text" />
                {/* <SearchIcon className="header_searchIcon" /> */}
                {/* <button className ="header_searchIcon" type="submit"> */}
                {/* <SearchIcon/>  */}
                <Search />
                {/* </button> */}
            </div>

            <div className="signin-link" style={{ textDecoration: "none", color: "white" }}>
                <Link to={"/signin"}>
                    <span style={{ textDecoration: "none", color: "white" }}>Hello, </span><br />
                    <span style={{ textDecoration: "none", color: "white" }}>sign&nbsp;In</span>
                </Link>
            </div>

            <div className="header_option">
                <span className="header_optionLine1" >Returns</span>
                <span className="header_optionLine2" >& Orders</span>
            </div>



            <div className="header_option">
                <span className="header_optionLine1">Try</span>
                <span className="header_optionLine2">Prime</span>
            </div>


            <div className="header_basket">
                <ShoppingBasketIcon />
                <span className="header_basket header_basketCount">0</span>
            </div>

        </div>
        // </div>
    );
}

export default Header
