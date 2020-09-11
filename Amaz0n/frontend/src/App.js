import React from "react";
import "./index.css";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';


function App() {

  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }


  return (
    <BrowserRouter>
   
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          {/* Cambiamos el link a la HomePage con el elemento Link de router-dom */} {/* <a href="index.html">Amaz0n</a> */}
          <Link to="/">Amaz0n</Link> 
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          X
        </button>
        <ul>
          <li>
            <a href="index.html">Shirts</a>
          </li>
          <li>
            <a href="index.html">Sweaters</a>
          </li>
        </ul>
      </aside>

      <main className="main">
        <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
        </div>
      </main>
      <footer className="footer">All right reserved </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
