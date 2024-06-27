import React from 'react';
import Login from './login.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Signup.js';
import Home from './Home.js';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<Home />}></Route>


    </Routes>
      <Login />
    </BrowserRouter>
  )
}

export default App