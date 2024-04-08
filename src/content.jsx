import Home from './home';
import Proiecte from './proiecte';
import Game from './game';
import Contact from './contact';

const componentMap = {
    "Home" : Home,
    "Proiecte" : Proiecte,
    "LegisLand" : Game,
    "Contact" : Contact
};

function Content({ selectedItem }){
    const SelectedComponent = componentMap[selectedItem];
  
    return(
        <SelectedComponent />
    )
}

export default Content;