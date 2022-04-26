import React,{useState} from 'react'
import GlobalStyle from './styles/index'
import Login from './pages/Login';
import { Switch,Route } from 'react-router-dom';
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  
  const [error, setError] = useState(false)
  const [auth, setAuth] = useState(false)
  const [dataUser, setDataUser] = useState('')
  
  return (
    <>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/' >
          <Login
          setError={setError}
          error={error}
          auth={auth}
          setAuth={setAuth}
          setDataUser={setDataUser} 
        />
        </Route>
        <Route exact path='/Register'><Register/></Route>
        <Route exact path='/Home' >
          <Home
          auth={auth}
          setAuth={setAuth}
          setDataUser={setDataUser}
          dataUser={dataUser}
          />
        </Route> 
      </Switch>
    </>
  );
}

export default App;
