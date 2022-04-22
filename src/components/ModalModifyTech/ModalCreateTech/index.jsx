import React from 'react'
import Box from './styles'


const ModifyTech = () => {
    return (
        <Box>
            <section>
                <h3>Tecnologia Detalhes</h3>
                <button>X</button>
            </section>
            
            <form>
                <div>
                <label>Nome do projeto</label>
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
                <button>Salvar alterações</button>
                <button>Excluir</button>
            </form>
        </Box>
    )
}
export default ModifyTech