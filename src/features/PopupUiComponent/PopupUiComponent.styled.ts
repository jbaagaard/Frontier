import styled from "styled-components";
import {uiBoxshadow} from "../GeneralComponents/StyledComponents";

export const Wrapper = styled.div<{top:number,left:number}>`
  transition: top 100ms;
  top: ${props => props.top+"px"};
  left: ${props => props.left+"px"};
  position: fixed;
  z-index: 2;
  background-color: #fff;
  ${uiBoxshadow};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  min-width: 200px;
`

export const Title = styled.div`
  
`

export const CloseIcon = styled.div`
  height: 24px;
  width: 24px;
  line-height: 24px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`

