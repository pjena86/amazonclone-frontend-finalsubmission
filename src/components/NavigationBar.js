import React from 'react';
//import { Navbar, Nav, Container } from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../css/NavigationBar.css";
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavigationBar() {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <LocationOnTwoToneIcon className="nav_locationIcon" />

      <Navbar.Brand href="/home" className="navoption_line1">Select-Address</Navbar.Brand>
      <Navbar.Toggle area-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-links">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">All Products</Nav.Link>
          {/* <Nav.Link href="/bestsellers/products/:IsBestSeller">Best Sellers</Nav.Link> */}
          <Nav.Link href="/categories/products/Beauty">Beauty</Nav.Link>
          <Nav.Link href="/categories/products/Books">Books</Nav.Link>
          <Nav.Link href="/categories/products/Clothes">clothes</Nav.Link>
          <Nav.Link href="/categories/products/Cookware">Cookware</Nav.Link>
          <Nav.Link href="/categories/products/Electronics">Electronics</Nav.Link>
          <Nav.Link href="/categories/products/Footware">Footware</Nav.Link>
          <Nav.Link href="/categories/products/Music">Music</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link href="/dashboard">User Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default NavigationBar


