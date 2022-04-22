import React from 'react'
import logo from '../../assets/Logo.png'
import {FaPlusSquare} from 'react-icons/fa'
import BoxTech from '../../components/BoxTech'
import {Container,Separator} from './styles'
// import CreateTech from '../../components/ModalCreateTech'
// import ModifyTech from '../../components/ModalModifyTech'

const Home = () => {
    return (
        <Container>
            <div >
                <img src={logo} alt='logomarca'/>
                <button>Sair</button>
            </div>
            <Separator/>
            <aside>
                <span>Ola Samuel Leao</span>
                <p>Primeiro módulo  (Introdução ao Frontend)</p>    
            </aside>
            <Separator/>
            <div>
                <h2>Tecnologias</h2>
                <FaPlusSquare color='#212529' height='32px' width='32px' cursor='pointer'/>
            </div> 
            <BoxTech/> 

            {/* <CreateTech/>          */}
            {/* <ModifyTech/> */}
        </Container>
    )
}   
export default Home