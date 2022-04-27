import React from 'react'
import Box from '../ModalModifyTech/styles'
import axios from 'axios'
import {useForm} from 'react-hook-form'


const ModifyTech = ({render, techs,closeModalModifyTech,id}) => {
    const find = techs.find(item => item.id === id ? item : null)
    
    const {register, handleSubmit} = useForm([])
    const requestModifyTech = (data) =>{
        const token = localStorage.getItem('token')
        axios.put(`https://kenziehub.herokuapp.com/users/techs/${find.id}`,data,{    
                headers:{
                    'Authorization': `Bearer ${token}`
                },
            })
        .then((response)=>{
            closeModalModifyTech()
            render()
        })
        .catch((error) => console.log(error))

        
    }
    const requestDeleteTech = () =>{
        const token = localStorage.getItem('token')
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${find.id}`,{    
                headers:{
                    'Authorization': `Bearer ${token}`
                },
            })
        .then((response)=>{
            closeModalModifyTech()
            render()
        })
        .catch((error) => console.log(error))
    }
   
    return (
        <Box>
            <section>
                <h3>Tecnologia Detalhes</h3>
                <button onClick={()=>closeModalModifyTech()}>X</button>
            </section>
            
            <form onSubmit={handleSubmit(requestModifyTech)}>
                <div>
                <label>Nome do projeto</label>
                <input placeholder='Digite a tecnologia' defaultValue={find.title} />
                </div>
                <div>
                <label>Selecionar o status</label>
                <select {...register('status')}>
                    <option value='Iniciante'>Iniciante</option>
                    <option value='Intermediario'>Intermediario</option>
                    <option value='Avançado'>Avançado</option>
                </select>
                </div>
                <aside>
                    <button className='save' onSubmit={()=>requestModifyTech()}>Salvar alterações</button>
                    <button className='delete' onClick={()=>requestDeleteTech()}>Excluir</button>
                </aside>
            </form>
        </Box>
    )
}
export default ModifyTech