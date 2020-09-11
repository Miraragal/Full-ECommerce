import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
        <h1>{product.name}</h1>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <img src="../images/patagonia-logo.png" alt="logo" id="logo" />
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} reviews)
            </li>
            <li><b>${product.price}</b></li>
            <li>
              Description:
              <div> {product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: $ {product.price} </li>
            <li>Status: {product.status}</li>
            <li>
              Qty:
              <select> 
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </li>
            <li> 
            <button className="button"> Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
