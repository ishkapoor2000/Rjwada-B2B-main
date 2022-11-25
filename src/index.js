import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About';
import Nav from "./Nav"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
