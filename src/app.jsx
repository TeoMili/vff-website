import React from 'react';
import { useState } from 'react';
import Header from './header';
import Menu from './menu';
import Content from './content';
import Footer from './footer';
import './css/styles.css';

const menuItems = ["Home", "Proiecte", "LegisLand", "Contact"];

function App(){

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    const handleMenuSelect = (item) => {
        setSelectedItem(item);
    }

    return(
        <div>
            <Header />
            <Menu menuItems = {menuItems} onSelect={handleMenuSelect}/>
            <Content selectedItem={selectedItem}/>
            <Footer />
        </div>
    )
}

export default App;