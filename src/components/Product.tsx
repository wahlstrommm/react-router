import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './compStyle.css';
const Product=()=> {
    const {id }= useParams();   
    console.log(id); 
  return (
    <div className="App-header">
        <h1>Product sida</h1>
        Product WORKS!!
        id: - {id}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, labore maxime illo veniam excepturi saepe repudiandae sapiente natus quam, fugiat ut soluta expedita, consectetur nemo vitae repellat. Ipsa, ut tempora.

        <button><Link to="/home" >Home</Link></button>
        <button><Link to="/admin" >Admin</Link></button>
        <button><Link to="/about" >About</Link></button>
        <button><Link to="/costumer" >Costumer</Link></button>

    </div>
  )
}
export default Product;