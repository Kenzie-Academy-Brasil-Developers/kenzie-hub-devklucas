import React from 'react'
import Button from '../../components/Button'
import FormStyled from './styles'

const FormLogin = () =>{
    return (
        <FormStyled>
            <h1>Login</h1>
            <div>
            <label>Email</label>
            <input placeholder={'Digite o email'} />
            </div>
            <div>
            <label>Senha</label>
            <input placeholder={'Digite a senha'} />
            </div>
            <Button text={'Entrar'}/>
            
            <span>Ainda não possui uma conta?</span>
            
            <Button text={'Cadastre-se'}/>
        </FormStyled>
    )

}

export default FormLogin