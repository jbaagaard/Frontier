import styled from "styled-components";

export const Wrapper = styled.div`
  margin: -6px 0 0 -6px;
  pointer-events: none;

`

export const PlayerIcon = styled.div`
  position: relative;
  height: 12px;
  width: 12px;
  background-color: green;
  border-radius: 12px;

`

export const RangeDiv = styled.div<{CityIsInRange:boolean, range:number}>`
  position: absolute;
  width: ${props => props.range*2+"px"};
  height: ${props => props.range*2+"px"};
  border-radius: ${props => props.range*2+"px"};
  background-color: ${props => props.CityIsInRange? "rgba(255,255,255,0.1)":"rgba(255,155,155,0.2)"};
  top: ${props => -props.range+"px"};
  left: ${props => -props.range+"px"};
  border: 1px solid ${props => props.CityIsInRange? "rgba(255,255,255,0.8)":"rgba(255,105,105,0.8)"};
`

export const RangeDisplayWrapper = styled.div`
  position: absolute;
`

export const RangeDisplaysvg = styled.svg`

    `
export const RangeDisplayLine = styled.line`
  stroke: white;
  stroke-width: 2;
`