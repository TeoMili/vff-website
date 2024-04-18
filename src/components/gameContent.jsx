import { useState } from "react";
import Options from './options';
import Host from './host';
import Client from './client';

function GameContent(){
    const [displayComponent, setDisplayComponent] = useState(0);
    
    const componentMap = {
        0: Options,
        1: Host,
        2: Client
    };

    const SelectedComponent = componentMap[displayComponent];

    return( 
        <SelectedComponent />
    )
}

export default GameContent;