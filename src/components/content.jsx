import Home from './home';
import Projects from './projects';
import Game from './game';
import Contact from './contact';

const componentMap = {
    "Acasă" : Home,
    "Proiecte" : Projects,
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