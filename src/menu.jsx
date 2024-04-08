import { useState } from 'react';

function Menu(props){
    const list = props.menuItems;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        setSelectedIndex(index);
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