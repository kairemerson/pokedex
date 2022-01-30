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
    background-image: linear-gradient(90deg, #f53527, #a62d24);
    width: 48%;
    border: 1px solid #360a07;
    padding: 2px 8px;
    border-radius: 8px;
    
`
export const StatsAtk = styled(StatsHp)`
    background-image: linear-gradient(90deg, #133cf2, #0f2aa3);
`
export const StatsDef = styled(StatsHp)`
    background-image: linear-gradient(90deg, #fae420, #d4c11c);
`
export const StatsSa = styled(StatsHp)`
    background-image: linear-gradient(90deg, #19f7f7, #21b5b5);
`
export const StatsSd = styled(StatsHp)`
    background-image: linear-gradient(90deg, #2fd12a, #2b8f28);
`
export const StatsSp = styled(StatsHp)`
    background-image: linear-gradient(90deg, #a073f5, #693dba);
`
