import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline: 0;
    }
    :root{
        --color-primary:#FF577F;
        --color-primary-focus:#FF427F;
        --color-primary-negative:#59323F;
        --sucess-color:#3FE864;
        --negative-color:#E83F5B;
        --grey_0:#F8F9FA;
        --grey_1:#868E96;
        --grey_2:#343B41;
        --grey_3:#212529;
        --grey_4:#121214;
        font-family: 'Inter', serif;
    }
    body{
        background-color: var(--grey_4);
    }
    button{
        cursor:pointer;
    }
    a{
        text-decoration:none;
    }
`