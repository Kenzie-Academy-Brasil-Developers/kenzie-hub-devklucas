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
height:80vh;
    h1{
        font-size:14.44px;
    }
    div{
        display: flex;
        flex-direction: column;
        width:90%;

    }
    input,select{
        background-color: var(--grey_2);
        border:none; 
        width:100%;
        height:35px;
        color:var(--grey_1);
    }
    label{
        text-align: start;
        font-size:9.77px;
        margin-bottom: 10px;
    }
    
    span{
        font-size:9.63px;
    }
    input::placeholder {
        color:var(--grey_1);
    }
`
export default FormStyled