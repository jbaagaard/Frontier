import * as S from "./Map.styled"
import island from "../maps/IslandSvg.svg"
import {Pos} from "../../models/general";
import {createRef, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {MapContext} from "../contexts/MapContext";
import CityHoverUi from "../CityHoverUi";
import Menu from "../Menu";

export interface MapItem{
    id:string|number
    pos:Pos
    node:ReactNode
}

interface MapProps{
    items:MapItem[];
}
const Map = ({items}:MapProps) => {
    const {targetCity, scale} = useContext(MapContext)
    const mapRef = useRef<HTMLDivElement>(null);
    console.log("render");
    const mouseMove = (e:any) => {
        //console.log(e.x,e.y)
    }

    useEffect(()=>{
        const map = mapRef.current!
        map.addEventListener("mousemove",mouseMove)
        return () =>{map.removeEventListener("mousemove",mouseMove)}
    },[])
    return (
        <S.Wrapper>
            <S.MapWrapper ref={mapRef}>
                <S.Map scale={scale} src={island}/>
                <S.ItemList>
                    {items.map(i=><S.Item key={i.id} top={i.pos.y*scale} left={i.pos.x*scale}>{i.node}</S.Item> )}
                </S.ItemList>
                {targetCity &&
                <S.TargetCityUi>
                    <CityHoverUi city={targetCity}/>
                </S.TargetCityUi>
                }
                <S.MenuWrapper>
                    <Menu/>
                </S.MenuWrapper>
            </S.MapWrapper>
        </S.Wrapper>
    )
}

export default Map