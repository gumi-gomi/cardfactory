import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react'
import Main from './Main';
import Header from './header';
import Footer from './footer';
import Cardetail from './carddetail'


function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/detail' element={<Cardetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
