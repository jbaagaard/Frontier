import {Player} from "../../../models/player";
import {createContext, ReactNode, useState} from "react";

export interface PlayerContextValues {
    player:Player|undefined,
    setPlayer:(player:Player)=>void
}

export const PlayerContext = createContext<PlayerContextValues>(null!)

interface PlayerContentProviderProps {
    children?:ReactNode
}

export const PlayerContextProvider = ({children}:PlayerContentProviderProps) => {
    const [player,setPlayer] = useState<Player|undefined>(undefined)
    const values:PlayerContextValues = {
        player:player,
        setPlayer:(player)=>{setPlayer(player)}
    }
    return(
        <PlayerContext.Provider value={values}>{children}</PlayerContext.Provider>
    )
}
