import React from 'react'
import { Link } from 'react-router-dom';
import './compStyle.css';
export default function About() {
  return (
    <div className="App-header">
        
        <h1>About sida</h1>  
        about works!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni praesentium similique a atque quam fuga expedita alias libero quos ullam, recusandae cupiditate corporis placeat. Libero, praesentium officia? Molestiae, eligendi.
        <button><Link to="/home" >Home</Link></button>
        <button><Link to="/product/5" >Product</Link></button>
        <button><Link to="/admin" >Admin</Link></button>
        <button><Link to="/costumer" >Costumer</Link></button>

    
    </div>
  )
}
