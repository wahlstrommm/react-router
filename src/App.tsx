import './App.css';
import {Link} from 'react-router-dom'
function App() {
  
  return (

    <div className="App">
      <header className="App-header">
        <h1>
          HELLO
        </h1>
        <button><Link to="/home" >Home</Link></button>
        <button><Link to="/product/5" >product</Link></button>
        <button><Link to="/admin" >admin</Link></button>
        <button><Link to="/about" >about</Link></button>
      </header>
    </div>
  );
}

export default App;
