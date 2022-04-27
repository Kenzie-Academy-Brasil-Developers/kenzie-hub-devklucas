import React from 'react'
import Box from './styles'
import Button from '../Button'

const CreateTech = () => {
    return (
        <Box>
            <section>
                <h3>Cadastrar tecnologia</h3>
                <button>X</button>
            </section>
            
            <form>
                <div>
                <label>Nome</label>
                <input placeholder='Digite a tecnologia'/>
                </div>
                <div>
                <label>Selecionar o status</label>
                <select>
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