import React, { useState } from "react";

import logo from "../../assets/Logo.png";

import { Container, Separator } from "./styles";  
import { FaPlusSquare } from "react-icons/fa";
import { Redirect } from "react-router-dom";

import BoxTech from "../../components/BoxTech";
import CreateTech from "../../components/ModalCreateTech";
import ModifyTech from "../../components/ModalModifyTech";

const Home = ({ auth, setAuth, dataUser, setDataUser }) => {
  const [id, setId] = useState([]);
  const [showModalModify, setShowModalModify] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  
  if (dataUser === '' ) {
    return <Redirect to="/" />;
  }

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
    setAuth(false)
    localStorage.clear()
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
      <BoxTech techs={dataUser.techs} sendId={sendId} />

      {showModalCreate === true ? (
        <CreateTech closeModalCreateTech={closeModalCreateTech} />
      ) : null}
      {showModalModify === true ? (
        <ModifyTech
          techs={dataUser.techs}
          closeModalModifyTech={closeModalModifyTech}
          id={id}
        />
      ) : null}
    </Container>
  );
};
export default Home;
