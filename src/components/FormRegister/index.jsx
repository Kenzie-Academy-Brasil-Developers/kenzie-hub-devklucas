import React from 'react'
import Button from '../Button'
import FormStyled from './styles'


const FormRegister = () =>{
    return (
        <FormStyled>
            <h1>Crie sua conta </h1>
            <span>Rapido e grátis, vamos nessa</span>
            <div>
                <label>Nome</label>
                <input type="text" placeholder='Digite seu nome'/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder='Digite seu email'/>
            </div>
            <div>
                <label>Senha</label>
                <input type="text" placeholder='Digite seu senha'/>
            </div>
            <div>
                <label>Confirmar Senha</label>
                <input type="text" placeholder='Confirme sua senha'/>
            </div>
            <div>
                <label>Selecionar módulo</label>
                <select>
                <option value="">Primeiro módulo</option>
                <option value="">Primeiro módulo</option>
                <option value="">Primeiro módulo</option>
                </select>
            </div>
            <Button style={{backgroundColor:"#59323F"}}>Cadastrar</Button>
        </FormStyled>
    )
}
export default FormRegister