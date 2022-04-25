import React from 'react'
import Container from './styles'

const BoxTech = ({techs,showModifyTech}) => {
    return (
        <Container>
            <ul>
                {techs.map(item=>{     
                        return <li key={item.id} /*onClick={showModifyTech(item.id)}*/>
                                    <h3>{item.title}</h3>
                                    <p>{item.status}</p>
                                </li>
                })}
            </ul>
        </Container>
    )
}
export default BoxTech
