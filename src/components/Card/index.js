import * as S from "./styes"

function Card(props){
    return(
        <S.Wrapper>
            <p>{props.id}</p>
            <h3>{props.name}</h3>
            <img src={props.image}/>
            <div>
                <S.TitleStats>hp</S.TitleStats>
                <span>atk</span>
                <span>def</span>
                <span>SA</span>
                <span>SD</span>
                <span>SP</span>
            </div>
        </S.Wrapper>
    )
}

export default Card