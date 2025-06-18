import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react'
import Main from './Main';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
