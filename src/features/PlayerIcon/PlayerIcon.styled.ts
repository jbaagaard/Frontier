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
  background-color: rgba(255,255,255,0.1);
  top: ${props => -props.range+"px"};
  left: ${props => -props.range+"px"};
  border: 1px solid rgba(255,255,255,0.8);
`