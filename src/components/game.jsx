import { useState } from "react";
import GameDescription from './gameDescription';
import GameContent from './gameContent';

function Game(){
    const [onGame, setOnGame] = useState(false);

    const handleClick = () => {
        setOnGame(true);
    }

    return(
        <>
            <h1> Welcome to LegisLand! </h1>
            {onGame ? <GameContent /> : <GameDescription startGame={handleClick}/>}
        </>
    )
}

export default Game;