import React from 'react'
import GlobalStyle from './styles/index'
import Login from './pages/Login';
import { Switch,Route } from 'react-router-dom';
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/' ><Login/></Route>
        <Route exact path='/Register' ><Register/></Route>
        <Route exact path='/Home' ><Home/></Route> 
      </Switch>
    </>
  );
}

export default App;
