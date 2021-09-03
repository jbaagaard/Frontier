import * as S from "./Menu.styled"
import {useContext, useEffect, useState} from "react";
import PopupUiComponent from "../PopupUiComponent";
import InventoryUi from "../InventoryUi";
import {PlayerContext} from "../contexts/PlayerContext";
import {MapContext} from "../contexts/MapContext";
import {City} from "../../models/city";

interface MenuProps{

}
const Menu = ({}:MenuProps) => {
    const [inventoryUi, setInventoryUi] = useState(false)
    const [CityUi, setCityUi] = useState(false)
    const {player} = useContext(PlayerContext)
    const {cities} = useContext(MapContext)
    const [currentCity, setCurrentCity] = useState<City|undefined>(undefined)
    console.log({currentCity})
    useEffect(()=>{
        if(!!player)
            setCurrentCity(cities.find(c=>c.pos.x === player.pos.x && c.pos.y === player.pos.y ))

    },[player,cities])
    function handleInventoryClicked() {
        setInventoryUi(true);
    }

    function handleOnInventoryCancel() {
        setInventoryUi(false);
    }

    return (
        <S.Wrapper>
            {!!currentCity && <S.Button>{currentCity.name}</S.Button>}
            <S.Button onClick={handleInventoryClicked}>Inventory</S.Button>
            {inventoryUi && <InventoryUi onCancel={handleOnInventoryCancel} player={player!}/>}
        </S.Wrapper>
    )
}

export default Menu