import React from 'react'
import { Link } from 'react-router-dom';
import './compStyle.css';
export default function Home() {
  return (
    <div className="App-header">
        <h1>Home sida</h1>
        home Works!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, nobis! Enim, ipsa sed animi culpa pariatur voluptate placeat laboriosam aut dolorem repellat dignissimos quisquam quaerat odit dicta nemo perferendis repudiandae.
        <button><Link to="/product/5" >Product</Link></button>
        <button><Link to="/admin" >Admin</Link></button>
        <button><Link to="/about" >About</Link></button>
        <button><Link to="/costumer" >Costumer</Link></button>

    </div>
  )
}
