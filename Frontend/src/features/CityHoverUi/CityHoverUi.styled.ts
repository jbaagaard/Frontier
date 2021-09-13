import styled from "styled-components";
import {slideInLeft, slideInRight, uiBoxshadow} from "../GeneralComponents/StyledComponents";

export const Wrapper = styled.div`
  padding: 16px;
  background-color: #fff;
  ${slideInLeft};
  ${uiBoxshadow};
  
`

export const Title = styled.div`

`

export const Content = styled.div`
  display: flex;
`

export const Right = styled.div`
  padding-left: 16px;

`

export const Left = styled.div`
  border-right: 1px solid rgba(0,0,0,0.2);

`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(0,0,0,0.1);

`

export const ResourceList = styled.div`

`

export const SubTitle = styled.div`

`
export const ResourceListItem = styled.div`
  
`

export const SmallText = styled.div`
  
`