import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPageDesign from './HomePage/LandingPageDesign';
import LoginPage from './Usuario/Login/LoginPage';
import SignupPage from "./Usuario/Signup/SignupPage";
import SelecaoDeCultura from './Interno/Seleção Cultura/selecaocultura';
import Tasks from './Interno/Controle/controle';

const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<LandingPageDesign/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/Signup" element={<SignupPage/>}/>
            <Route exact path="/selcultura" element={<SelecaoDeCultura/>}/>
            <Route exact path="/controle" element={<Tasks/>}/>
          </Routes>
      </Router>
    );
  }

export default App;