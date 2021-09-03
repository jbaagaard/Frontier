import * as S from "./InventoryUi.styled"
import {Player} from "../../models/player";
import PopupUiComponent from "../PopupUiComponent";

interface InventoryUiProps {
    player: Player
    onCancel: () => void
}

const InventoryUi = ({player, onCancel}: InventoryUiProps) => {
    return (
        <PopupUiComponent onCancel={onCancel} title={player.name + "'s inventory"}>
            <S.Wrapper>
                <S.ResourceList>
                    <S.ResourceGrid>
                        <S.Subtitle>Name</S.Subtitle>
                        <S.Subtitle>Amount</S.Subtitle>
                        <S.Subtitle>Avarage buy price</S.Subtitle>
                    </S.ResourceGrid>
                    {player.inventory.resources.map(r =>
                        <S.ResourceGrid key={"p" + r.type}>
                        <S.Text>{r.type}</S.Text>
                        <S.Text>{r.amount}</S.Text>
                        <S.Text>{r.averageBuyPrice}</S.Text>
                        </S.ResourceGrid>)}
                </S.ResourceList>
            </S.Wrapper>
        </PopupUiComponent>
    )
}

export default InventoryUi