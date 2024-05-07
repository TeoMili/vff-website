import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Content from './components/content';
import Home from './components/home';
import Projects from './components/projects';
import Game from './components/game';
import Contact from './components/contact';
import Footer from './components/footer';
import './css/styles.css';

const menuItems = ["Acasă", "Proiecte", "LegisLand", "Contact"];

function App(){

    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    const handleMenuSelect = (item) => {
        setSelectedItem(item);
    }

    return(
        <>
        <Header />
        <BrowserRouter>
            <Menu menuItems = {menuItems} onSelect={handleMenuSelect}/>
            <Routes>
                <Route path="/" element={<Content selectedItem={selectedItem}/>} />
                    <Route index element={<Home />} />
                    <Route path="proiecte" element={<Projects />} />
                    <Route path="legisland" element={<Game />} />
                    <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        </>
    )
}

export default App;