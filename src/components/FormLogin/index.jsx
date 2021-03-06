import React from 'react'
import Button from '../../components/Button'
import FormStyled from './styles'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const FormLogin = ({setError, error, setDataUser}) =>{
    const history = useHistory();
   
    const schema = yup.object().shape({
        email: yup.string().required('Email obrigatorio').email('Digite email valido'),
        password : yup.string().required('Senha obrigatoria')
        
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})
    const onSubmit = (data) => {
                axios.post('https://kenziehub.herokuapp.com/sessions',data)
                .then((response) => {
                    localStorage.setItem('id', response.data.user.id)
                    localStorage.setItem('token', response.data.token)
                    setDataUser(response.data.user)
                    history.push(`/Home`)
                })
                .catch((error)=>{
                    setError(true)
                    setTimeout(()=>{
                        setError(false)
                    },4000)
                })
    }
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div>
            <label>Email</label>
            <input placeholder={'Digite o email'} {...register("email")}/>
            {errors.email?.message}
            </div>
            <div>
            <label>Password</label>
            <input type='password' placeholder={'Digite a senha'} {...register("password")}/>
            {errors.password?.message}
            {error && <p>Usuario ou senha estao incorretos</p>}
            </div>
            <Button type='submit' className='button'>Entrar</Button>
            
            <span>Ainda não possui uma conta?</span>
            
            <Link to='/Register' className='button'>Cadastre-se</Link>
        </FormStyled>
    )
}

export default FormLogin
