import styled from 'styled-components'

const Container = styled.section`
display: flex;
flex-direction:column;
align-items:center;
justify-content: space-between;
width:90%;
height:270px;
background-color:var(--grey_3);
position: absolute;
border:1px solid var(--grey_1);
    section{
        display:flex;
        background-color:var(--grey_2);
        height:40px;
        width:100%;
        position: absolute;
        top:0;
        align-items:center;
        justify-content: space-around;
        color:var(--grey_0);
        font-size:11.2px;
    }
    section button{
        background-color: var(--grey_2);
        width: 5px;
        color: var(--grey_1);

    }
    form{
        position:absolute;
        display:flex;
        top:40px;
        flex-direction: column;
        justify-content: space-evenly;
        width:90%;
        height:calc(100% - 40px);
        border: 1px solid white;
        

    }
    input,select{
        background-color:var(--grey_2);
        border: 1px var(--grey_0) solid;
        width:100%;
    }
`
export default Container