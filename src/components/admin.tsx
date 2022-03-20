import React from 'react'
import { Link } from 'react-router-dom';
import './compStyle.css';
export default function admin() {
  return (
    <div className="App-header">
    <h1>Admin sida</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum reprehenderit aliquam quis nesciunt labore numquam reiciendis exercitationem corporis odit corrupti officia atque dolores id, soluta accusantium commodi magnam nulla iusto?</p>
    <button><Link to="/home" >Home</Link></button>
        <button><Link to="/product/5" >Product</Link></button>
        <button><Link to="/about" >About</Link></button>
        <button><Link to="/costumer" >Costumer</Link></button>
    </div>
  )
}
