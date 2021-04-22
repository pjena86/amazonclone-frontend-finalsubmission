import React from 'react';
import Header from '../components/Header';
import NavigationBar from "../components/NavigationBar";
import Registration from './Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const UserRegistration = () => {

    let styles = {

        backgroundColor: ' #9dc1ce',
      };

    return (
        <div style={styles}>
            <Header/> 
            <NavigationBar/>
            <Registration/>
            <Footer/>
        </div>
    )
}

export default UserRegistration
