import * as S from "./City.styled"
import {City} from "../../models/city";
import {useContext} from "react";
import {ActionContext} from "../contexts/ActionContext";
import {MapContext} from "../contexts/MapContext";

interface CityProps{
    city:City
}
const CityIcon = ({city}:CityProps) => {
    const {setTargetCity} = useContext(MapContext)

    function handleMouseEnter() {
        setTargetCity(city);
    }

    function handleMouseLeave() {
        setTargetCity(undefined);
    }

    return (
        <S.Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <S.CityIcon/>
        </S.Wrapper>
    )
}

export default CityIcon