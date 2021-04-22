import React from 'react'
import SignIn from "../pages/SignIn";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer from '../components/Footer';

const UserSignIn = () => {

    let styles = {

        backgroundColor: ' #9dc1ce',
      };

    return (
        <div style={styles}>
            <Header/>
            <NavigationBar/>
            <SignIn/>
            <Footer/>
        </div>
    )
}

export default UserSignIn
