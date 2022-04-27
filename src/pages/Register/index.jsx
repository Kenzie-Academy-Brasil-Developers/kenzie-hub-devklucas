import React from 'react'
import logo from '../../assets/Logo.png'
import FormRegister from '../../components/FormRegister'
import MainStyled from './styles'
import {Link,Redirect} from 'react-router-dom'

const Register = () =>{
    const verify = localStorage.getItem('token')
   if(verify != null) {
       return <Redirect to='/Home'/>
   }
    return (
        <MainStyled>
            <header>
                <img src={logo} alt='logo kenzie'/>
                <Link to='/'><button className='back'>Voltar</button></Link>
            </header>
            <FormRegister/>
        </MainStyled>        
    )
}
export default Register