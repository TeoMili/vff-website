import React from 'react';
import Header from './header';
import Menu from './menu';
import Content from './content';
import Footer from './footer';
import './css/styles.css';

const menuItems = ["Home", "Proiecte", "LegisLand", "Contact"];

function Main(){
    return(
        <div>
            <Header />
            <Menu menuItems = {menuItems} />
            <Content />
            <Footer />
        </div>
    )
}

export default Main;