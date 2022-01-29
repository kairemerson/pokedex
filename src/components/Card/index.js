import * as S from "./styes"

function Card(props){
    return(
        <S.Wrapper>
            <h3>{props.name}</h3>
            <img src={props.image}/>
            <p>{props.id}</p>
        </S.Wrapper>
    )
}

export default Card