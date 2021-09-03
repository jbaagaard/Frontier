import * as S from "./PlayerIcon.styled"
import {Player} from "../../models/player";
import {ActionContext} from "../contexts/ActionContext";
import {useContext} from "react";
import {MapContext} from "../contexts/MapContext";
import {vessels} from "../../models/Vessel";

interface PlayerIconProps{
    player:Player
}
const PlayerIcon = ({player}:PlayerIconProps) => {
    const {targetCity,scale} = useContext(MapContext);
    return (
        <S.Wrapper>
            {targetCity && <S.RangeDiv CityIsInRange={true} range={vessels[player.vessel].range * scale}/>}
            <S.PlayerIcon/>
        </S.Wrapper>
    )
}

export default PlayerIcon