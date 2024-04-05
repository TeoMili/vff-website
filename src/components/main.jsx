import React from 'react';
import Header from './header';
import Menu from './menu';

const menuItems = ["Home", "Proiecte", "LegisLand", "Contact"];

function Main(){
    return(
        <div>
            <Header />
            <Menu menuItems = {menuItems} />
        </div>
    )
}

export default Main;