import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function HomeScreen(props) {
  return (
    //Movemos la ul de App.js a HomeScreen
      <ul className="products">
        {data.products.map(product => // Combertimos lista productos en un array. Para ello, tenemos que crear un file 'data.js' con toda la info
          <li key={product._id}>
            <div className="product">
              {/* Introducimos link a la pag del producto en la imagen */}
              <Link to={'/product/' + product._id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                {/* <a href="product.html">{product.name}</a> */}
                <Link to={'/product/' + product._id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">$ {product.price}</div>
              <div className="product-rating">
                {product.rating} Starts ({product.numReviews} reviews)
              </div>
            </div>
          </li>
        )}
      </ul>
  );
}

export default HomeScreen;
