import React from 'react'
import Button from '../Button'

import FormStyled from './styles'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const FormRegister = () =>{
        const schema = yup.object().shape({
            email: yup.string().required('Email obrigatorio').email('Digite email valido'),
            password : yup.string().min(6,'A senha precisa de pelo menos 6 caracteres'),
            confirmPassword : yup.string().required().oneOf([yup.ref("password")], "As senhas não concidem"),

        })
        const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)});
        
        const onSubmit = (data) => {
            const {name, email, password, course_module} = data
            const dataRegister = {
                name, 
                email, 
                password,
                course_module,
                contact:`linkedin/in/${name.split('').join()}`,
                bio:'Lorem ipsum dolor emet'
            }
            return <Redirect to="/" />
            

            // axios.post('https://kenziehub.herokuapp.com/users',dataRegister)
            // .then((response) => console.log(response))
            // .cacth((error)=> console.log(error))

        }

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h1>Crie sua conta </h1>
            <span>Rapido e grátis, vamos nessa</span>
            <div>
                <label>Nome</label>
                <input type="text" placeholder='Digite seu nome' {...register('name')}/>
                {errors.name?.message}
            </div>
            <div>
                <label>Email</label>
                <input type="text" placeholder='Digite seu email' {...register('email')}/>
                {errors.email?.message}
            </div>
            <div>
                <label>Senha</label>
                <input type="password" placeholder='Digite seu senha' {...register('password')}/>
                {errors.password?.message}
            </div>
            <div>
                <label>Confirmar Senha</label>
                <input type="password" placeholder='Confirme sua senha'  {...register('confirmPassword')}/>
                {errors.confirmPassword?.message}
            </div>
            <div>
                <label>Selecionar módulo</label>
                <select {...register('course_module')}>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
            </div>
            <Button  type='submit' style={{backgroundColor:"#59323F"}}>Cadastrar</Button>
        </FormStyled>
    )
}
export default FormRegister