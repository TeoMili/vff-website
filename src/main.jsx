import React from 'react';
import Header from './header';
import Menu from './menu';
import Footer from './footer';
import './css/styles.css';

const menuItems = ["Home", "Proiecte", "LegisLand", "Contact"];

function Main(){
    return(
        <div>
            <Header />
            <Menu menuItems = {menuItems} />
            <Footer />
        </div>
    )
}

export default Main;