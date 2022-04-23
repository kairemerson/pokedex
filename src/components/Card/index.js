import * as S from "./styes"

function Card(props){
    return(
        <S.Wrapper key={props.id}>
            <p>{props.id}</p>
            <h3>{props.name}</h3>
            <img src={props.image}/>
            <S.WrapperCard> 
                <S.StatsHp>hp:{props.stats["0"].base_stat}</S.StatsHp>
                <S.StatsAtk>atk:{props.stats["1"].base_stat}</S.StatsAtk>
                <S.StatsDef>def:{props.stats["2"].base_stat}</S.StatsDef>
                <S.StatsSa>SA:{props.stats["3"].base_stat}</S.StatsSa>
                <S.StatsSd>SD:{props.stats["4"].base_stat}</S.StatsSd>
                <S.StatsSp>SP:{props.stats["5"].base_stat}</S.StatsSp>
            </S.WrapperCard>
        </S.Wrapper>
    )
}

export default Card