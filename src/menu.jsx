function Menu(props){
    const list = props.menuItems;

    const updatedList = list.map((item) => {
        return <li class="menu">{item}</li>;
    });

    return <ul class="menu">{updatedList}</ul>
}
 
export default Menu;