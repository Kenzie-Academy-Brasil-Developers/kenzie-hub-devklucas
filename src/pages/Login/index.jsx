import React from 'react'
import logo from '../../assets/Logo.png'
import FormLogin from '../../components/FormLogin'
import MainStyled from './styles'
const Login = () => {
    return (
        <MainStyled>
            <header>
                <img src={logo} alt='logo kenzie'/>
            </header>
            <FormLogin/>
        </MainStyled>
    )
}
export default Login