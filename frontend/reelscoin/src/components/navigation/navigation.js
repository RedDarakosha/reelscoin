import { Referal } from "./referal"
import { Game } from "./game"
import { Activities } from "./activities" 

import "./navigation.css"

export function Navigation(){

    return (
        <div className="navigation-bar">
            <Referal></Referal>
            <Game></Game>
            <Activities></Activities>
        </div>
    )
}