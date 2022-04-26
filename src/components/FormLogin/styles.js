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
border-radius:4px;
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
        color: var(--grey_0);
        width:100%;
        height:38px;
        border-radius:4px;
    }
    input:hover{
        border:1px solid var(--grey_0);
    }
    input::placeholder{
            padding-left:16px;
            font-size:16px;
            font-family:'Inter'
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
@media (min-width:600px){
    width:369px;
    max-height:520px;
        h1{
            font-size:18px;
        }
        input{
            width:329px;
            height: 48px;
            font-size:16px;
        }
       
        
        label{
            font-size:12px;
        }
        .button{
            width: 324px;
            height: 48px;
            font-size:16px;
        }
}
`
export default FormStyled