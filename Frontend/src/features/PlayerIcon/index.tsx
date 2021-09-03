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
            // <S.RangeDiv CityIsInRange={calculateDistance(player.pos, targetCity.pos) < vessels[player.vessel].range}
            //             range={vessels[player.vessel].range * scale}/>
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

    return (
        <S.RangeDisplayWrapper>
            <S.RangeDiv CityIsInRange={distance < range}
                        range={range * scale}/>
            <S.RangeDisplaysvg height={distance * scale} width={distance * scale} xmlns="http://www.w3.org/2000/svg">
                <S.RangeDisplayLine x1={pos1.x} y1={pos1.y} x2={pos2.x} y2={pos2.y}/>
            </S.RangeDisplaysvg>
        </S.RangeDisplayWrapper>
    )
}

