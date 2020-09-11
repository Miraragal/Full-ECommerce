import React from "react";
import "./index.css";
import data from "./data";

function App() {

  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open")
  }

  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }


  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Amaz0n</a>
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
          <ul className="products">
            { data.products.map(product => // Combertimos lista productos en un array. Para ello, tenemos que crear un file 'data.js' con toda la info
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">{product.name}</a>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">$ {product.price}</div>
                <div className="product-rating">{product.rating} Starts ({product.numReviews} reviews)</div>
              </div>
            </li>
              )}

             
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved </footer>
    </div>
  );
}

export default App;
