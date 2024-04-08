import { useState } from 'react';
function Menu(props){
    const list = props.menuItems;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const updatedList = list.map((item, index) => {
        return <li 
                className={'menu ' + (selectedIndex == index ? 'activeMenu' : 'inactiveMenu')} 
                key={item} 
                onClick={() => { setSelectedIndex(index); }}>{item}
                </li>;
    });

    return <ul className="menu">{updatedList}</ul>
}
 
export default Menu;