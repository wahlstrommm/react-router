import React from 'react'
import { Link } from 'react-router-dom';
import './compStyle.css';
export default function Contact() {
  return (
    <div className="App-header">
        <h1>Contact sida</h1>
        Contact workS! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum beatae repellat incidunt soluta dicta. Odio corrupti tempora laboriosam quisquam ratione mollitia libero recusandae, in tenetur animi quas, dicta quos!
        <button><Link to="/home" >Home</Link></button>
        <button><Link to="/product/5" >Product</Link></button>
        <button><Link to="/admin" >Admin</Link></button>
        <button><Link to="/about" >About</Link></button>
        <button><Link to="/costumer" >Costumer</Link></button>

    </div>
  )
}
