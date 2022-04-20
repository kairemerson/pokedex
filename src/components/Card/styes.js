import styled from "styled-components";

export const Wrapper = styled.div`
    min-width: 150px;
    max-width: 300px;
    min-height: 250px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: 6px;
    padding: 4px;
    border-radius: 20px;
    &>p{
        align-self: baseline;
        margin-left: 10px;
        margin-top: 6px;
    }
    
    
`
export const WrapperCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 4px;
`
export const StatsHp = styled.p`
    background-image: linear-gradient(90deg, #f2807e, #fa5855);
    width: 48%;
    padding: 2px 8px;
    border-radius: 8px;
`
export const StatsAtk = styled(StatsHp)`
    background-image: linear-gradient(90deg, #8d96f7, #4857f7);
`
export const StatsDef = styled(StatsHp)`
    background-image: linear-gradient(90deg, #f7f192, #f7ee60);
`
export const StatsSa = styled(StatsHp)`
    background-image: linear-gradient(90deg, #92f6f7, #53f3f5);
`
export const StatsSd = styled(StatsHp)`
    background-image: linear-gradient(90deg, #89f5a4, #4cf576);
`
export const StatsSp = styled(StatsHp)`
    background-image: linear-gradient(90deg, #ad85f2, #7931f5);
`
