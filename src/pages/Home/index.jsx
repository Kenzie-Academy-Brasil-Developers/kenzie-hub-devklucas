import React, { useState,useEffect } from "react";

import logo from "../../assets/Logo.png";
import { Container, Separator } from "./styles";  
import { FaPlusSquare } from "react-icons/fa";

import axios from 'axios'
import BoxTech from "../../components/BoxTech";
import CreateTech from "../../components/ModalCreateTech";
import ModifyTech from "../../components/ModalModifyTech";
import { Redirect } from "react-router-dom";

const Home = () => {
  const [id, setId] = useState([]);
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [dataUser, setDataUser] = useState([])
  const [techs, setDataTechs] = useState([])

 
  const render = () => {axios.get(`https://kenziehub.herokuapp.com/users/${user}`)
      .then((response)=> {
        setDataUser(response.data)
        setDataTechs(response.data.techs)
      })
      .catch((error) => console.log(error))
    }

  useEffect( () => {
    render()
  },[])
  
  const showModalModifyTech = () => setShowModalModify(true);
  const closeModalModifyTech = () => setShowModalModify(false);
  const showModalCreateTech = () => setShowModalCreate(true);
  const closeModalCreateTech = () => setShowModalCreate(false);

  const sendId = (id) => {
    setId(id);
    showModalModifyTech(true);
  };
  
  const Logout = () => {
    setDataUser('')
    localStorage.clear()
    return <Redirect to='/'/> 
  }
  const user = localStorage.getItem('id')
  if(user == null){
    return <Redirect to='/'/>
  }  
 
 
  return (
    <Container>
      <div>
        <img src={logo} alt="logomarca" />
        <button onClick={()=>Logout()}>Sair</button>
      </div>

      <Separator />
        <aside>
            <span>Ola {dataUser.name}</span>
            <p>{dataUser.course_module}</p>
        </aside>
      <Separator />

      <div>
        <h2>Tecnologias</h2>
        <FaPlusSquare
          color="#212529"
          height="32px"
          width="32px"
          cursor="pointer"
          onClick={() => showModalCreateTech()}
        />
      </div>
       <BoxTech techs={techs.reverse()} sendId={sendId} />
      
    
      {showModalCreate === true ? (
        <CreateTech 
        closeModalCreateTech={closeModalCreateTech} 
        render={render}
        />
      ) : null}
      
      {showModalModify === true ? (
        <ModifyTech
          render={render}
          techs={techs}
          closeModalModifyTech={closeModalModifyTech}
          id={id}
        />
      ) : null}
    </Container>
  );
};
export default Home;
