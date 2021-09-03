import * as S from "./PlayerIcon.styled"
import {Player} from "../../models/player";
import {ActionContext} from "../contexts/ActionContext";
import {useContext} from "react";
import {MapContext} from "../contexts/MapContext";
import {vessels} from "../../models/Vessel";
import {calculateDistance} from "../Map/mapUtils";
import {Pos} from "../../models/general";

interface PlayerIconProps {
    player: Player
}

const PlayerIcon = ({player}: PlayerIconProps) => {
    const {targetCity, scale} = useContext(MapContext);
    return (
        <S.Wrapper>
            {targetCity &&
            <RangeDisplayUi pos1={player.pos} pos2={targetCity.pos} range={vessels[player.vessel].range}/>
            }
            <S.PlayerIcon/>
        </S.Wrapper>
    )
}

export default PlayerIcon


interface RangeDisplayUiProps {
    pos1: Pos,
    pos2: Pos,
    range: number
}

export const RangeDisplayUi = ({pos1, pos2, range}: RangeDisplayUiProps) => {
    const distance = calculateDistance(pos1, pos2)
    const {scale} = useContext(MapContext);

    console.log((pos1.x-pos2.x)*scale, (pos1.y-pos2.y)*scale)

    return (
        <S.RangeDisplayWrapper>
            <S.RangeDiv CityIsInRange={distance < range}
                        range={range * scale}/>
            <S.RangeDisplaysvg range={distance*2*scale} height={distance*2 * scale} width={distance*2 * scale} xmlns="http://www.w3.org/2000/svg">
                <S.RangeDisplayLine x1={distance*scale} y1={distance*scale} x2={(pos1.x-pos2.x)*scale} y2={(pos1.y-pos2.y)*scale}/>
            </S.RangeDisplaysvg>
        </S.RangeDisplayWrapper>
    )
}

