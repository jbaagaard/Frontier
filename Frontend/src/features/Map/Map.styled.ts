import styled from "styled-components";

export const Wrapper = styled.div`
`

export const Map = styled.img<{scale:number}>`
  width: ${props => props.scale*1406+"px"};
    height: ${props => props.scale*713+"px"};
  position: absolute;
  top: 0;
  left: 0;
`

export const MapWrapper = styled.div`
  position: relative;
`

export const ItemList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const Item = styled.div<{ top: number, left:number}>`
  position: absolute;
  top:${props => props.top+"px"};
  left:${props => props.left+"px"};
`

export const TargetCityUi = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  pointer-events: none;
`

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;  
`