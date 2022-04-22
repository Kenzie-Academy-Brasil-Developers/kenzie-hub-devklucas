import React from 'react'
import logo from '../../assets/Logo.png'
import FormRegister from '../../components/FormRegister'
import MainStyled from './styles'

const Register = () =>{
    return (
        <MainStyled>
            <header>
                <img src={logo} alt='logo kenzie'/>
                <button className='back'>Voltar</button>
            </header>
            <FormRegister/>
        </MainStyled>        
    )
}
export default Register