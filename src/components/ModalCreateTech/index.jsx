import React from 'react'
import Box from './styles'
import Button from '../Button'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const CreateTech = () => {
    const schema = yup.object().shape({
        title: yup.string().required('Insira o nome da tecnologia')
    })
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})
    const onSubmit = (data) => console.log(data)
    return (
        <Box>
            <section>
                <h3>Cadastrar tecnologia</h3>
                <button>X</button>
            </section>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label>Nome</label>
                <input placeholder='Digite a tecnologia' {...register('title')}/>
                {errors.title?.message}
                </div>
                <div>
                <label>Selecionar o status</label>
                <select {...register('status')}>
                    <option>Iniciante</option>
                    <option>Intermediario</option>
                    <option>Avançado</option>
                </select>
                </div>
                <Button/>
            </form>
        </Box>
    )
}
export default CreateTech