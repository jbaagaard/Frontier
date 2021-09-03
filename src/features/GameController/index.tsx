import * as S from "./GameController.styled"
import Map, {MapItem} from "../Map";
import React, {useContext, useEffect, useState} from "react";
import {getCities, getPlayer} from "../../api/player";
import CityIcon from "../CityIcon";
import PlayerIcon from "../PlayerIcon";
import {PlayerContext} from "../contexts/PlayerContext";


interface GameControllerProps{

}
const GameController = ({}:GameControllerProps) => {
    const [mapItems, setMapItems] = useState<MapItem[]>([])
    const {player,setPlayer} = useContext(PlayerContext)


    useEffect(()=>{
        (async ()=>{
            const cities = await getCities();
            const p = await getPlayer();
            setPlayer(p)
            let mi:MapItem[] = []

            mi = cities.map(c=>({id:c.name,pos:c.pos, node:<CityIcon city={c}/>}))
            mi = [...mi,{id:p.name,pos:p.pos,node:<PlayerIcon player={p}/>}]
            setMapItems(mi)
        })();
    },[])
    return (
        <S.Wrapper>
            <Map items={mapItems}/>
        </S.Wrapper>
    )
}

export default GameController