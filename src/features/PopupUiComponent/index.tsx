import * as S from "./PopupUiComponent.styled"
import {ReactNode, useState} from "react";
import {createPortal} from "../Portal/createPortal";

const [PortalProvider, PortalContainer, Portal] = createPortal();

export const InnerPopupProvider = PortalProvider;

export const InnerPopupContainer = PortalContainer;

export const InnerPopupPortal = Portal;

interface PopupUiComponentProps{
    onCancel:()=>void;
    children:ReactNode
    title?:string
}
const PopupUiComponent = ({onCancel,children, title}:PopupUiComponentProps) => {
const [top,setTop] = useState(16)
const [left,setLeft] = useState(16)

    function mouseMove(e:any) {
    const xOffset = top-e.y;
    console.log(xOffset);
    }

    function handleMousedown() {
    console.log("added")
        window.addEventListener("mousemove",mouseMove)
    }

    function handleMouseup() {
        window.removeEventListener("mousemove",mouseMove)
    }

    return (
        <InnerPopupPortal>
            <S.Wrapper top={top} left={left}>
                <S.Header onMouseDown={handleMousedown} onMouseUp={handleMouseup} onMouseLeave={handleMouseup}>
                    <S.Title>{title}</S.Title>
                    <S.CloseIcon onClick={onCancel}>x</S.CloseIcon>
                </S.Header>
                {children}
            </S.Wrapper>
        </InnerPopupPortal>
    )
}

export default PopupUiComponent