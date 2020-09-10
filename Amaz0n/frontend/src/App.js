import React from "react";
import "./index.css";

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
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Lightweight Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$60,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d4.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Responsibili Tee Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$60,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d5.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Up&Out Organic Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$60,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d6.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Lightweight Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$55,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d8.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Lightweight Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$55,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d7.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Lightweight Shirt</a>
                </div>
                <div className="product-brand">Patagonia</div>
                <div className="product-price">$55,00</div>
                <div className="product-rating">4.5 Starts (10 reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved </footer>
    </div>
  );
}

export default App;
