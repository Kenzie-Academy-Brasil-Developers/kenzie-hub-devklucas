import React from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import FormLogin from '../../components/FormLogin'
import MainStyled from './styles'
const Login = ({setError, error, auth, setAuth, setDataUser}) => {
    const history = useHistory();
    
    const redirectHome = (auth) =>{
        if(auth){
            history.push(`/Home`)
        }
    } 
    
    return (
        <MainStyled>
            <header>
                <img src={logo} alt='logo kenzie'/>
            </header>
            <FormLogin 
            redirectHome={redirectHome}
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