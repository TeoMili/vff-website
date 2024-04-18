import React from 'react';
import { useState } from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';
import './css/styles.css';

const menuItems = ["Home", "Proiecte", "LegisLand", "Contact"];

function App(){

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    const handleMenuSelect = (item) => {
        setSelectedItem(item);
    }

    return(
        <>
        <Header />
        <Menu menuItems = {menuItems} onSelect={handleMenuSelect}/>
        <Content selectedItem={selectedItem}/>
        <Footer />
        </>
    )
}

export default App;