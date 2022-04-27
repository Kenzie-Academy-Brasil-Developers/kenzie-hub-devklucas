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
    h3{
        font-size:11.2px;
    }
    section{
        display:flex;
        background-color:var(--grey_2);
        height:40px;
        width:100%;
        position: absolute;
        top:0;
        align-items:center;
        justify-content: space-between;
        color:var(--grey_0);
        font-size:11.2px;
        padding: 0 16px;
    }
    section button{
        width: 14px;
        color: var(--grey_1);
        background-color: var(--grey_2);
        border: none;

    }
    form{
        position:absolute;
        display:flex;
        top:40px;
        flex-direction: column;
        justify-content: space-evenly;
        width:90%;
        height:calc(100% - 40px);
    }
    div{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        width:100%;
    }
    label{
        font-size:10px;
        font-family: 'Inter';
        color:var(--grey_0);
        margin-bottom: 17px;
    }
    input,select{
        background-color:var(--grey_2);
        border: 1px var(--grey_0) solid;
        width:100%;
        height:38.5px;
        color:var(--grey_0);
    }
    input::placeholder{
        color:var(--grey_0);
    }
    button{
        width:100%;
    }
@media (min-width:500px){
    width: 369px;
        
}

`
export default Container