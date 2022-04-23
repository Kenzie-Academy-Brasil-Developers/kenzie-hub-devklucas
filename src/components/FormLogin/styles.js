import styled from 'styled-components'

const FormStyled = styled.form`
width:90%;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin-top: 10px;
background-color: var(--grey_3);
color:var(--grey_0);
height:70vh;
    h1{
        font-size:14.44px;
    }
    div{
        display: flex;
        flex-direction: column;
        width:90%;

    }
    input{
        background-color: var(--grey_2);
        border:none; 
        width:100%;
        height:38px;
    }
    label{
        text-align: start;
        font-size:9.77px;
        margin-bottom: 10px;
    }
    
    span{
        font-size:9.63px;
    }
    .button{
        background-color: var(--color-primary);
        color: var(--color-white);
        width:90%;
        height: 38px;
        font-weight:500;
        border:none;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`
export default FormStyled