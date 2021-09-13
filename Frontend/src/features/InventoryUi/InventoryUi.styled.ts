import styled from "styled-components";
import {UiSmallText, UiSubTitle, UiTitle} from "../GeneralComponents/fonts";
import {slideInRight} from "../GeneralComponents/StyledComponents";

export const Wrapper = styled.div`
  min-height: 320px;
  padding: 8px;
`

export const Title = styled(UiTitle)`
  
`

export const Subtitle = styled(UiSubTitle)`
  
`

export const Text = styled(UiSmallText)`
  
`

export const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
`

export const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`