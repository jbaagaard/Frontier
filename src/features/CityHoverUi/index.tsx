import * as S from "./CityHoverUi.styled"
import {City} from "../../models/city";

interface CityHoverUiProps{
    city:City
}
const CityHoverUi = ({city}:CityHoverUiProps) => {

    return (
        <S.Wrapper>
            <S.Title>{city.name}</S.Title>
            <S.Content>
                <S.Left>
                    <S.ResourceList>
                        <S.Grid>
                            <S.SubTitle>Resource</S.SubTitle>
                            <S.SubTitle>Amount</S.SubTitle>
                            <S.SubTitle>Price</S.SubTitle>
                        </S.Grid>
                        {city.resources.map(r=><S.Grid>
                            <S.SmallText>{r.type}</S.SmallText>
                            <S.SmallText>{r.amount}</S.SmallText>
                            <S.SmallText>{Math.round(r.price)}</S.SmallText>
                        </S.Grid>)}
                    </S.ResourceList>
                </S.Left>
                <S.Right>
                    <S.SubTitle>Population</S.SubTitle>
                    <S.SmallText>{city.population}</S.SmallText>
                </S.Right>

            </S.Content>

        </S.Wrapper>
    )
}

export default CityHoverUi