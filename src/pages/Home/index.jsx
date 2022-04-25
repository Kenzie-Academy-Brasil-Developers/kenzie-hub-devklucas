import React, {useState} from 'react'
import logo from '../../assets/Logo.png'
import {FaPlusSquare} from 'react-icons/fa'
import BoxTech from '../../components/BoxTech'
import {Container,Separator} from './styles'
import {Redirect} from 'react-router-dom'

import CreateTech from '../../components/ModalCreateTech'
// import ModifyTech from '../../components/ModalModifyTech'

const Home = ({auth, setAuth, dataUser, setDataUser}) => {
    // const [showModalModify, setShowModalModify] = useState(false)
    const [showModalCreate, setShowModalCreate] = useState(false)
    if(!auth){
        return <Redirect to='/'/>
    }
    // const showModifyTech = (id) => {
    //     setShowModalModify(true)
    //     console.log(id)
    // }
    const showModalCreateTech = () => {
        setShowModalCreate(true)
    }
    
    return (
        <Container>
            <div >
                <img src={logo} alt='logomarca'/>
                <button>Sair</button>
            </div>
            <Separator/>
            <aside>
                <span>Ola {dataUser.name}</span>
                <p>{dataUser.course_module}</p>    
            </aside>
            <Separator/>
            <div>
                <h2>Tecnologias</h2>
                <FaPlusSquare color='#212529' height='32px' width='32px' cursor='pointer' onClick={()=>showModalCreateTech()}/>
            </div> 
            <BoxTech techs={dataUser.techs} /> 

            {showModalCreate && <CreateTech/>          }
            {/* {showModalModify === true ? <ModifyTech techs={dataUser.techs} showModalModify={showModalModify}/> : null} */}
        </Container>
    )
}   
export default Home