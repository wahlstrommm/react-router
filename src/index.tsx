import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './components/admin';
import Costumer from './components/costumer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/Contact';
import Product from './components/Product';
import Notfound from './components/notfound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'element={<App/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/product/:id'element={<Product/>}/>
          <Route path='/admin'element={<Admin/>}/>
          <Route path='/costumer'element={<Costumer/>}/>
          <Route path='*'element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
