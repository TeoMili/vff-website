function Menu(props){
    const list = props.menuItems;

    const updatedList = list.map((item) => {
        return <li>{item}</li>;
    });

    return <ul>{updatedList}</ul>
}
 
export default Menu;