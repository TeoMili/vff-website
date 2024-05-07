import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu(props){

    const list = props.menuItems;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const navigate = useNavigate();

    const componentMap = {
        "Acasă" : "/",
        "Proiecte" : "/proiecte",
        "LegisLand" : "/legisland",
        "Contact" : "/contact"
    };

    const handleClick = (index) => {
        setSelectedIndex(index);
        props.onSelect(list[index]);
        navigate(componentMap[list[index]]);
    }

    const updatedList = list.map((item, index) => {
        return <li 
                className={'menu ' + (selectedIndex === index ? 'activeMenu' : 'inactiveMenu')} 
                key={item} 
                onClick={() => handleClick(index)}>{item}
                </li>;
    });

    return <ul className="menu">{updatedList}</ul>
}
 
export default Menu;