import styled from 'styled-components'

const MainStyled = styled.main`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100vh;
    header{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:90%;
    }
    .back {
        background-color:var(--grey_3);
        height:25px;
        width:70px;
        color:var(--grey_0);
        font-weight:600;
        border:none;
    }
@media(min-width:500px){

header{
    max-width:370px;
}    
}
`
export default MainStyled