import { Link } from 'react-router-dom';
import './compStyle.css';
export default function Costumer() {
  return (
    <div className="App-header">
         <h1>Costumer sida</h1>      
        costumer works! Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo mollitia, eaque corrupti sit odio libero natus ad, consectetur aliquam nisi consequatur placeat deleniti soluta vel sunt facilis, quos aliquid.
        <button><Link to="/home" >Home</Link></button>
        <button><Link to="/product/5" >Product</Link></button>
        <button><Link to="/admin" >Admin</Link></button>
    
    
    </div>
  )
}
