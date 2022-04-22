import styled from 'styled-components'

export const Container = styled.main`
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-around;
height:100vh;
    div{
        display: flex;
        width:90%;
        align-items:center;
        justify-content: space-between;
    }
    div button{
        background-color:var(--grey_3);
        height:25px;
        width:70px;
        color:var(--grey_0);
        font-weight:600;
        border:none;
    }
    aside{
        width:90%;
        display:flex;
        flex-direction: column;
    }
    aside span{
        font-weight: 700;
        color:var(--grey_0);
        font-size:18px;
        margin-bottom: 10px;
    }
    aside p{
        font-weight: 600;
        color:var(--grey_1);
        font-size: 12px;
    }
    div h2{
        font-weight:600;
        color:var(--grey_0);
        font-size:16px;
    }
`
export const Separator = styled.div`
    width:100vw;
    height:1px;
    background-color: var(--grey_3);

`

