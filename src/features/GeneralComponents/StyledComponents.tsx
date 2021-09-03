import {css} from "styled-components";

export const overlayOnHover = (amount?:number) => {
        return    css`
    &:hover{
    &:after{
      position: absolute;
      display: block;
      content: "";
      background-color: rgba(0,0,0,${amount? amount : "0.1"});
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  &:active{
    &:after{
      position: absolute;
      display: block;
      content: "";
      background-color: rgba(0,0,0,${amount? Math.min(amount*2,1) : "0.1"});
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
    `
    }
;

export const uiBoxshadow = () => {
    return css`
      box-shadow: 0px 4px 5px 0px #00002A40;
    `
}