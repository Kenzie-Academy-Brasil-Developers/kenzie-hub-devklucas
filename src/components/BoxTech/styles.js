import styled from 'styled-components'

const Container = styled.section`
width:90%;
display:flex;
flex-direction: column;
    ul{
        background-color: var(--grey_3);
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        min-height: 240px;
        max-height: 240px;
        overflow-y: scroll ;
    }
    li{
        background-color:var(--grey_4);
        width:90%;
        display:flex;
        align-items:center;
        justify-content: space-between;
        margin: 16px 0px 2px 0px;
        padding:13px; 
    }
    li h3{
        font-weight:700;
        color:var(--grey_0);
        font-size:14.2px;
    }
    li p{
        font-weight:400;
        color:var(--grey_1);
        font-size:12.1px;
    }
    li:hover{
        background-color:var(--grey_2); 
        color:var(--grey_0);
    }
    li p:hover{
        
    }
   
`
export default Container