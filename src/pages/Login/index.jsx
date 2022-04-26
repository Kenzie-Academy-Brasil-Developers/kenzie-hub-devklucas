import React from 'react'
import { Redirect } from 'react-router-dom'

import logo from '../../assets/Logo.png'
import FormLogin from '../../components/FormLogin'
import MainStyled from './styles'
const Login = ({setError, error, auth, setAuth, setDataUser}) => {
   const verify = localStorage.getItem('token')
   if(verify != null) {
       return <Redirect to='/Home'/>
   }
    return (
        <MainStyled>
            <header>
                <img src={logo} alt='logo kenzie'/>
            </header>
            <FormLogin 
            setError={setError}
            error={error}
            auth={auth}
            setAuth={setAuth}
            setDataUser={setDataUser} 
            />
        </MainStyled>
    )
}
export default Login